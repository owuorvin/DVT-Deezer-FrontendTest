# Deezer Frontend

This repo holds the codebase for the Deezer Frontend.

### Project Structure

```
├── README.md
├── node_modules [1102 entries exceeds filelimit, not opening dir]
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── setupTests.ts
├── src
│   ├── index
│   │   ├── api.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── LoadingSpinner.tsx
│   │   ├── Songs.tsx
│   │   ├── TopBar.tsx
│   │   ├── SongCard.tsx
│   │   ├── Pagination.tsx
│   │   ├── SearchArtist.tsx
│   │   └── Videos.test.tsx
│   ├── index.tsx
│   ├── pages
│   │   ├── ArtistPage.tsx
│   │   ├── PlayListPage.tsx
│   │   ├── SingleSongView.tsx
│   │   ├── TrackCard.tsx
│   │   └── TrackList.tsx
│   ├── .env
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── store
│   │   ├── configureStore.ts
│   │   ├── songsSlice.ts
│   │   └── rootReducer.ts
│   ├── theme
│   │   ├── ThemeProvider.tsx
│   │   ├── base.ts
│   │   └── schemes
│   │       └── PureLightTheme.ts
│   └── utils
│       ├── Constants.ts
│       ├── config.ts
│       ├── fetch.ts
└── tsconfig.json


### Techstack

1. Typescript
2. Redux
3. Material Ui
4. React Testing Library
5. React query 

#### Local set up

1. Clone the repo, then run the following commands in order in your Terminal


```bash

cd Deezer-frontend
git checkout <branch-of-interest>
npm install
npm run test # to run test coverage

```
Then run:
```
npm start # makes the app available on localhost, port 3001 by default

#### Submit a Pull Request

How to:

1. In Terminal, do this in the root directory of the project

```bash
git checkout -b feature/short-description 
```

##### Branch naming convention\*

Preface you branch name with

- `feature` for branches that introduce new functionality
- `chore` for branches that perform a useful general improvement, not tied to any specific functionality
- `fix` for branches that fix broken functionality
- `tests` for branches that only add developer tests

2. Raise a PR on GitHub, making sure to follow the inbuilt PR template.

3. Your changes will be merged into `main` on condition that:

- they do not break existing functionality
- they do not lower test coverage (unreasonably)
### Other screens
- Search
![Tests](https://github.com/owuorvin/DVT-Deezer-FrontendTest/blog/main/search-screenshot.png)
- Playlist details
![Tests](https://github.com/owuorvin/DVT-Deezer-FrontendTest/blog/main/PlayList-Screenshot.png)
- Artist Details
![Tests](https://github.com/owuorvin/DVT-Deezer-FrontendTest/blog/main/Single-Album-Screenshot.png)

### sample test coverage
![Tests](https://github.com/owuorvin/DVT-Deezer-FrontendTest/blog/Test-ScreenShot.png.png)