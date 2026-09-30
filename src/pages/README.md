# Page structure

Each route owns a page folder. The route component is intentionally thin and composes the page from files in its `sections/` folder. Components shared by multiple routes remain in `src/components/`, and shared site layout stays in `src/layout/`.

```
pages/
├── home/
│   ├── Home.jsx
│   └── sections/
├── about/
│   ├── About.jsx
│   └── sections/
│       ├── WhoWeAreSection.jsx
│       ├── OurStorySection.jsx
│       ├── OurPurposeSection.jsx
│       ├── AboutFounderSection.jsx
│       ├── OurValuesSection.jsx
│       └── AboutNewsletterSection.jsx
├── contact/
│   ├── Contact.jsx
│   ├── Contact.css
│   └── sections/
│       ├── ContactHeroSection.jsx
│       ├── SendUsMessage.jsx
│       ├── GetInTouch.jsx
│       ├── OurLocation.jsx
│       ├── ContactFaq.jsx
│       └── ContactMobileFollowup.jsx
├── shop/
│   ├── Shop.jsx
│   ├── Shop.css
│   └── sections/
│       ├── ShopCatalogSection.jsx
│       ├── WellnessBanner.jsx
│       ├── ShopBenefits.jsx
│       └── ShopNewsletter.jsx
└── product-details/
    └── ProductDetails.jsx
```

Do not create a second folder for a route. Add new UI areas to that route's `sections/` folder and keep reusable components in `src/components/`.
