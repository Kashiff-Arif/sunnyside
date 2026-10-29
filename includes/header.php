<!DOCTYPE html>

<html lang="en" dir="ltr">



<head>

    <title><?= isset($pageTitle) ? $pageTitle : 'Sunnyside | Naltrexone &amp; App to Drink Less or Quit'; ?></title>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">

    <meta name="description" content="Sunnyside">
    <meta property="og:title" content="<?= isset($pageTitle) ? $pageTitle : 'Sunnyside - Drink Less or Quit - Start Your Free Trial'; ?>">
        <meta property="og:description" content="<?= isset($pageDescription) ? $pageDescription : 'Comprehensive naltrexone Telehealth program to drink less alcohol or quit. 100% online. Medication, coaching, and habit-change app.'; ?>">
    <meta name="robots" content="index, follow">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <!-- <link rel="icon" type="image/x-icon" href="src/images/favicon.png"> -->
    <link rel="preload" fetchpriority="high" as="image" href="src/images/logo.svg">
       <link rel="stylesheet" href="src/dist/main.min.css?v=<?php echo time(); ?>">

</head>

<?php

$pageClass = "";

if (isset($ishome)) {

    $pageClass .= " front-page";
}

if (isset($innerPages)) {

    $pageClass .= " inner-page";
}

?>





<body class="<?php echo trim($pageClass); ?>">


    <!-- modal -->

    <div class="modal custom-modal fade" tabindex="-1" role="dialog">
          <div class="custom-modal__overlay"></div>
        <div class="modal-dialog modal-dialog-centered">

            <div class="modal-content">

                <button type="button" class="popup-cross-icon" data-bs-dismiss="modal" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>

                <div class="modal-body">



                </div>

            </div>

        </div>

    </div>
    <?php include_once "includes/svg-icons.php"; ?>


        <!-- Header -->
        <header class="header">
            <div class="container">
                <div class="headerWrapper">
                    <!-- Site Logo -->
                    <div class="header__logo">
                        <a href="index.php"><img src="src/images/logo.svg" alt="Sunnyside" class="img-fluid"></a>
                    </div>
                    <!-- Nav Links -->
                    <div class="header__right">
                        <nav id="site-navigation" aria-label="Primary navigation">
                            <ul>
                                <li><a href="how-it-works">How it works</a></li>
                                <li><a href="#">Medication</a></li>
                                <li><a href="results">Results</a></li>
                                <li class="has-mega">
                                    <button type="button" class="mega-toggle" aria-expanded="false" aria-controls="mega-resources">
                                    Resources <span class="chev" aria-hidden="true"></span>
                                    </button>

                                    <div class="mega-menu" id="mega-resources">
                                        <div class="container">
                                            <div class="mega-inner">
                                                <!-- <button type="button" class="mega-back">&larr; Back</button> -->
                                                <!-- Latest blog post -->
                                                <div class="mega-col mega-blog">
                                                    
                                                    <div class="mega-blog-body">
                                                        <div>
                                                            <span class="mega-label">Latest blog post</span>
                                                            <div class="mega-blog-text">
                                                                <h4>Can Naltrexone Help With Stress Drinking? What the Research Shows</h4>
                                                                <div class="button-row for-desktop">
                                                                    <a href="#" class="btn-pill btn-pill--dark">Read the post</a>
                                                                    <a href="#" class="btn-pill btn-pill--outline">Explore the blog</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="src/images/blog-thumb.webp" alt="" class="mega-blog-img">
                                                        <div class="button-row for-responsive">
                                                            <a href="#" class="btn-pill btn-pill--dark">Read the post</a>
                                                            <a href="#" class="btn-pill btn-pill--outline">Explore the blog</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Guides -->
                                                <div class="mega-col">
                                                    <span class="mega-label">Guides</span>
                                                    <ul class="mega-links mega-links--yellow">
                                                        <li><a href="#"><span>Naltrexone 101</span></a></li>
                                                        <li><a href="#"><span>Mindful Drinking 101</span></a></li>
                                                        <li><a href="#"><span>Naltrexone Side Effects</span></a></li>
                                                        <li><a href="#"><span>Hangxiety 101</span></a></li>
                                                    </ul>
                                                </div>

                                                <!-- Resources & tools -->
                                                <div class="mega-col">
                                                    <span class="mega-label">Resources &amp; tools</span>
                                                    <ul class="mega-links mega-links--blue">
                                                        <li><a href="#"><span>Blog</span></a></li>
                                                        <li><a href="#"><span>Podcast</span></a></li>
                                                        <li><a href="#"><span>Youtube Channel</span></a></li>
                                                        <li><a href="#"><span>Instagram Account</span></a></li>
                                                    </ul>
                                                </div>

                                                <!-- Quiz card -->
                                                <a href="" class="mega-quiz">
                                                    <img src="src/images/mega-quiz.webp" alt="Am I Drinking Too Much?">
                                                    <span class="mega-quiz-tag">Quiz</span>
                                                    <strong>Am I Drinking Too Much?</strong>
                                                    <span class="btn-pill btn-pill--yellow">Take the quiz</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="about">About</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </nav>
                        <!-- Get Started Button -->
                        <div class="button-row">
                            <a href="#" class="btn btn-dafult">Get started</a>
                        </div>
                        <!-- Responsive Menu Icon -->
                        <button type="button" class="header__menuIcon" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <script>
            document.addEventListener('DOMContentLoaded', function () {
            const nav      = document.querySelector('.header nav');
            const item     = nav.querySelector('.has-mega');
            const toggle   = item.querySelector('.mega-toggle');
            // const backBtn  = item.querySelector('.mega-back');
            const isMobile = () => window.matchMedia('(max-width: 991px)').matches;

            function openMenu() {
                item.classList.add('is-open');
                toggle.setAttribute('aria-expanded', 'true');
                if (isMobile()) nav.classList.add('mega-open');
            }

            function closeMenu() {
                item.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('mega-open');
            }

            toggle.addEventListener('click', function (e) {
                e.stopPropagation();
                item.classList.contains('is-open') ? closeMenu() : openMenu();
            });

            // backBtn.addEventListener('click', closeMenu);

            document.addEventListener('click', function (e) {
                if (!item.contains(e.target)) closeMenu();
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') closeMenu();
            });

            window.addEventListener('resize', closeMenu);
            });
        </script>