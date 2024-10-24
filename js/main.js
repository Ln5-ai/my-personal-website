// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 这里可以添加更多的交互效果和动画

// 设置进度波浪高度
document.querySelectorAll('.progress-pie').forEach(pie => {
    const progress = parseFloat(pie.getAttribute('data-progress')) / 100;
    const waves = pie.querySelector('.waves');
    waves.style.bottom = `${(progress - 1) * 100}%`;
});

// 在文件末尾添加以下代码
document.addEventListener('DOMContentLoaded', function() {
    const jobs = ['job1', 'job2', 'job3', 'job4'];
    const buttons = ['showMore1', 'showMore2', 'showMore3'];

    buttons.forEach((btnId, index) => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', function() {
                // 显示下一个工作经历
                const nextJob = document.getElementById(jobs[index + 1]);
                if (nextJob) {
                    nextJob.classList.remove('hidden');
                }

                // 隐藏当前按钮
                this.parentElement.classList.add('hidden');

                // 显示下一个按钮（如果存在）
                const nextBtn = document.getElementById(`showMoreBtn${index + 2}`);
                if (nextBtn) {
                    nextBtn.classList.remove('hidden');
                }
            });
        }
    });

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 设置进度波浪高度
    document.querySelectorAll('.progress-pie').forEach(pie => {
        const progress = parseFloat(pie.getAttribute('data-progress')) / 100;
        const waves = pie.querySelector('.waves');
        waves.style.bottom = `${(progress - 1) * 100}%`;
    });

    // 处理菜单项的活跃状态
    const menuItems = document.querySelectorAll('.side-menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 删除或注释掉以下代码
    /*
    const sideNav = document.getElementById('sideNav');
    const recentSection = document.getElementById('recent');
    let sideNavTop = sideNav.offsetTop;

    function stickySideNav() {
        const recentSectionTop = recentSection.offsetTop;
        const sideNavWidth = sideNav.offsetWidth;
        if (window.pageYOffset >= recentSectionTop) {
            sideNav.style.position = 'fixed';
            sideNav.style.top = '20px';
            sideNav.style.width = `${sideNavWidth}px`;
        } else {
            sideNav.style.position = 'static';
            sideNav.style.width = '100%';
        }
    }

    window.onscroll = function() {
        stickySideNav();
    };

    stickySideNav();
    */

    // 删除或注释掉以下代码
    /*
    const showMoreButton = document.getElementById('showMoreWork');
    const moreWorkExperience = document.getElementById('moreWorkExperience');

    if (showMoreButton && moreWorkExperience) {
        showMoreButton.addEventListener('click', function() {
            if (moreWorkExperience.classList.contains('hidden')) {
                moreWorkExperience.classList.remove('hidden');
                showMoreButton.textContent = '收起';
            } else {
                moreWorkExperience.classList.add('hidden');
                showMoreButton.textContent = '查更多';
            }
        });
    }
    */
});

document.addEventListener('DOMContentLoaded', function() {
    const showMoreButtons = document.querySelectorAll('.show-more-btn');
    
    showMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const moreWorkExperience = document.getElementById(`moreWorkExperience${index + 1}`);
            if (moreWorkExperience) {
                moreWorkExperience.classList.remove('hidden');
                this.style.display = 'none'; // 隐藏当前的"查看更多"按钮
            }
        });
    });
});






