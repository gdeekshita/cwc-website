# Creative Writing Collaborative website

Plain HTML/CSS rebuild of [creativewritingcollab.com](https://www.creativewritingcollab.com/), replacing the Google Sites version. No build step: every page is a hand-editable `index.html`.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Links are root-relative (`/about-us/`), so open pages through a server rather than double-clicking the files.

## Layout

```
index.html                     Home
about-us/                      About Us
programs/                      Programs and each school-year program
school-chapters/               School chapters hub and one page per chapter (ambassador bios live here)
for-schools/                   For Schools: host a chapter, how sessions run, request a chapter
for-schools/one-pager/         Printable one-page summary for schools (PDF copy in assets/pdf/)
become-an-ambassador/          Become an Ambassador, for high schoolers (Apply links to the Google Form)
published-books/               Published books
cwc-registration-form/         Embedded Google Form
home/                          Redirects the old Google Sites /home URL to /
assets/css/style.css           All styles (colors and fonts are variables at the top)
assets/js/main.js              Header on scroll, mobile menu, home slideshow
assets/img/                    Images, grouped by section
assets/pdf/                    Session booklets (copied from the old Wix file host) and the school one-pager PDF
```

Page URLs match the Google Sites paths, so existing links keep working after the domain switch.

The header and footer are repeated in every page. When adding a page or changing the menu, update the `<nav>` in every `index.html`. The desktop menu only just fits beside the logo at 901–960px wide, so check that width before adding a top-level item.

## Known content issues carried over from the old site

- **Testimonials** and **We are Killing our Planet** pages are empty.
- **Programs** and **Published Books** landing pages contain only a banner.
- The podcasts have no audio, only cover art and descriptions.
