// Highlight menu saat bagian halaman dibuka
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-links a");

        window.addEventListener("scroll", () => {
            let current = "";

            sections.forEach(section => {
                const top = section.offsetTop - 120;
                if (scrollY >= top) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });
        });

// Featured Project Modal
        // Menunggu seluruh HTML selesai dibaca karena elemen modal
        // berada setelah script di dalam file.
        document.addEventListener('DOMContentLoaded', () => {
            const featuredCard = document.getElementById('featured-project-card');
            const featuredModal = document.getElementById('featured-project-modal');
            const featuredClose = document.getElementById('featured-modal-close');

            // Jika salah satu elemen belum ada, hentikan dengan aman.
            if (!featuredCard || !featuredModal || !featuredClose) return;

            function openFeaturedModal() {
                featuredModal.classList.add('show');
                featuredModal.setAttribute('aria-hidden', 'false');
                document.body.classList.add('modal-open');
                featuredClose.focus();
            }

            function closeFeaturedModal() {
                featuredModal.classList.remove('show');
                featuredModal.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('modal-open');
                featuredCard.focus();
            }

            featuredCard.addEventListener('click', (event) => {
                if (event.target.closest('a, button')) return;
                openFeaturedModal();
            });

            featuredCard.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openFeaturedModal();
                }
            });

            featuredClose.addEventListener('click', closeFeaturedModal);

            featuredModal.addEventListener('click', (event) => {
                if (event.target === featuredModal) closeFeaturedModal();
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && featuredModal.classList.contains('show')) {
                    closeFeaturedModal();
                }
            });
        });
