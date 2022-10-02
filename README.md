# Azpotify

An elegant copy of Spotify project with full-featured audio player.

# Showcase

Here is a live Demo for [Azpotify](https://azpotify.netlify.app/)

### Discover Page

![Discover](https://live.staticflickr.com/65535/52398645419_5d68435eab_k.jpg)

### Artist Page

![Artist Page](https://live.staticflickr.com/65535/52398853128_443f83702d_k.jpg)

### By Country

![By Country](https://live.staticflickr.com/65535/52398853108_1863ac75c1_k.jpg)

### Music Player

![Music Player](https://live.staticflickr.com/65535/52398357086_db5d8f6240_k.jpg)

# Setup

To set up a development environment, please follow these steps:

1. Clone the repo

   ```shell
    git clone https://github.com/codewithelvin/azpotify.git
   ```

2. Change directory to the project directory

   ```shell
   cd azpotify
   ```

3. Install the dependencies

   ```shell
    yarn install
   ```

   If you get an error, please check the console for more information.

   If you don't get an error, you are ready to start development.

4. Run the app

   ```shell
   yarn run dev
   ```

   Project will be running in the browser.

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

5. Create `.env` in root directory and copy following

   ```
   VITE_SHAZAM_CORE_RAPID_API_KEY=
   VITE_GEO_API_KEY=
   ```

   To get api key for Shazam please visit https://rapidapi.com/tipsters/api/shazam-core/ and register in order to get your key.

   For Geo Api plerase visit https://geo.ipify.org/ to get started
