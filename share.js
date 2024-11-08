document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareButton');
    const shareModal = document.getElementById('shareModal');
    const closeModal = document.getElementById('closeModal');
    const copyLinkButton = document.getElementById('copyLink');
    const shareButtons = document.querySelectorAll('.share-option');

    // Open modal
    shareButton.addEventListener('click', () => {
        shareModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal
    closeModal.addEventListener('click', closeShareModal);
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            closeShareModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && shareModal.style.display === 'block') {
            closeShareModal();
        }
    });

    function closeShareModal() {
        shareModal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Copy link functionality
    copyLinkButton.addEventListener('click', async () => {
        const currentUrl = window.location.href;
        
        try {
            await navigator.clipboard.writeText(currentUrl);
            showCopyFeedback('Link copied to clipboard!');
        } catch (err) {
            showCopyFeedback('Failed to copy link');
        }
    });

    // Handle share button clicks
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.dataset.platform;
            if (platform) {
                handleShare(platform);
            }
        });
    });

    // Show feedback message
    function showCopyFeedback(message) {
        const feedback = document.createElement('div');
        feedback.className = 'copy-feedback';
        feedback.textContent = message;
        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.remove();
        }, 2000);
    }

    // Handle different share platforms
    function handleShare(platform) {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent('Juneau Vacation Home: Stunning View + Beach Access');

        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
            whatsapp: `https://wa.me/?text=${title}%20${url}`,
            messenger: `https://www.facebook.com/dialog/send?link=${url}&app_id=YOUR_APP_ID`,
            messages: `sms:?body=${title}%20${url}`
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    }

    // Handle mobile native share if available
    if (navigator.share) {
        const nativeShareButton = document.createElement('button');
        nativeShareButton.className = 'share-option native-share';
        nativeShareButton.innerHTML = `
            <div class="icon share-icon">📤</div>
            <span>Share</span>
        `;
        
        nativeShareButton.addEventListener('click', async () => {
            try {
                await navigator.share({
                    title: 'Juneau Vacation Home: Stunning View + Beach Access',
                    text: 'Check out this amazing vacation home in Juneau!',
                    url: window.location.href
                });
            } catch (err) {
                console.log('Share failed:', err);
            }
        });

        // Add native share button to the primary share row
        document.querySelector('.primary-share').appendChild(nativeShareButton);
    }
});