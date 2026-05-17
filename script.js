
    document.addEventListener('DOMContentLoaded', () => {
        const categoryCards = document.querySelectorAll('.category-card');
        const pricePanels = document.querySelectorAll('.price-chart-panel');

        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                // 1. කලින් active වෙලා තිබුණු ප්‍රධාන කාණ්ඩයේ active class එක අයින් කරනවා
                categoryCards.forEach(c => c.classList.remove('active'));
                
                // 2. Click කරපු කාණ්ඩය active කරනවා
                card.classList.add('active');

                // 3. කලින් පෙනුණු pricing panel එක සඟවනවා
                pricePanels.forEach(panel => panel.classList.remove('active'));

                // 4. Click කරපු කාණ්ඩයට අදාළ pricing panel එකේ ID එක අරන් ඒක පෙන්වනවා
                const targetPanelId = card.getAttribute('data-target');
                document.getElementById(targetPanelId).classList.add('active');
            });
        });
    });
