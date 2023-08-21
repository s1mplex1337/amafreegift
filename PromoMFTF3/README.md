# Auto Add Promo Items MFTF3

### 80 Free Gift specific tests, grouped by purpose, for greater convenience.

        Tests group: Promo
        Runs all tests.
            SSH command to run this group of tests:
            vendor/bin/mftf run:group Promo -r
    
        Tests group: CPTS_PromoLite
        Runs CPTS Lite tests.
            SSH command to run this group of tests:
            vendor/bin/mftf run:group CPTS_PromoLite -r

        Tests group: CPTS_PromoPro
        Runs CPTS Pro tests.
            SSH command to run this group of tests:
            vendor/bin/mftf run:group CPTS_PromoPro -r

        Tests group: PromoConfiguration
        Runs tests related to extension configuration.
            SSH command to run this group of tests:
            vendor/bin/mftf run:group PromoConfiguration -r

        Tests group: PromoFreeGifts
        Runs tests related to extension creation rules and adding free gifts.
            SSH command to run this group of tests:
            vendor/bin/mftf run:group PromoFreeGifts -r

        Tests group: PromoBannersLite
        Runs tests related to extension the display of banners on product pages.
            SSH command to run this group of tests:
            vendor/bin/mftf run:group PromoBannersLite -r
