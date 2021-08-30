# Overview

This is a web-based news app which uses Next.js and the News API. The user will initially see a home page, and can go to the feed page which will show a list of England-based news articles (for a maximum of five pages). If the user clicks on the title of an article, they will be redirected to the exact article, beyond the app. There is a paginator at the bottom of the feed page. The toolbar also contains links to my LinkedIn and Github.

# The Finer Details

The Home page was very simple to construct due to there being minimal content.

The Toolbar component makes use of Next's useRouter hook so that the router object could be accessed. This resulted in the ability to add an onclick event to the home and feed pages for redirecting to their respective paths. For LinkedIn and Github, window.location object was used in the same way.

The feed page is stored in the feed folder, but the file's name if [slug].jsx. This is to enable dynamic routing. In this instance, it would mean that the route would say /feed/page-number (e.g., /feed/2 if the user is on page 2). Various parameters from the API such as the title, description, and image are used in this file, so that they get displayed.

The paginator, which is part of the Feed page, uses ternary operations to determine how it should be displayed. If the user is on page 1, the "Previous Page" button is greyed out and the not allowed symbol is displayed if the user hovers over the button. If the user is on page 5, the "Next Page" button is greyed out and displays the not allowed symbol if hovered over.

The API response code uses getServerSideProps alongside async/await syntax to determine what the Feed page should display in which scenrio.

# Preview

**Home:**
![Next News (Home)](https://user-images.githubusercontent.com/70066475/131389727-191daf43-0480-4f17-8a94-79de76e48241.png)

**Feed:**
![Next News (Feed)](https://user-images.githubusercontent.com/70066475/131389742-8490df73-61ca-4f80-9c83-1e73e7338aa8.png)

# See Live

https://next-news-theta.vercel.app/

# Getting Started

Start by cloning this repo from your command line:

```bash
# Clone this repository
$ git clone https://github.com/Sulaiman451/Next-News

# Go into the repository
$ cd Next-News

# Remove current origin repository
$ git remote remove origin
```

Then, install the dependencies using NPM or Yarn:

Using NPM:

```bash
# Install core dependencies
$ npm install

# Install Next.js if you do not already have it installed
$ npm install next

# Start the development server
$ npm run dev
```

Using Yarn:

```bash
# Install core dependencies
$ yarn

# Install Next.js if you do not already have it installed
$ yarn next

# Start the development server
$ yarn dev
```

**NOTE:** If you run into issues installing the dependencies using NPM, use the command below:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm-true --allow-root
```

Once your server has started, go to http://localhost:3000 in your browser or ctrl + right-click the same URL through the terminal's output. This will allow you to see the site running on a local development server.
