import type { Config } from '@/types'

const config: Config = {
  page: {
    title: 'Jaume C',
    footer: false,
    borderRadius: 0.5,
    background: 'flickering-grid',
    // redirects: {
    //   'discord': 'https://discord.gg/keksi',
    // },
  },
  user: {
    //* Setting name and avatar will override the Lanyard user data
    // name: 'Jaume C',
    // avatar: 'https://avatars.githubusercontent.com/u/48551949?v=4',
    // bio: 'Software Engineer',
    discordId: '331880264655437834',
  },
  api: {
    //* Lanyard API URL (default: https://api.lanyard.rest/)
    lanyardUrl: 'https://api.lanyard.rest/',
  },
  links: {
    //* Social links (small buttons on the top)
    social: [
      // {
      //   icon: 'patreon',
      //   url: 'https://patreon.com/keksi',
      // },
      // {
      //   icon: 'buymeacoffee',
      //   url: 'https://www.buymeacoffee.com/keksi',
      // },
      // {
      //   icon: 'githubsponsors',
      //   url: 'https://github.com/sponsors/keksiqc',
      // },
    ],
    //* Primary links (big buttons)
    primary: [
      {
        label: 'Discord',
        icon: 'discord',
        url: 'https://discord.com/users/331880264655437834',
      },
      {
        label: 'GitHub',
        icon: 'github',
        url: 'https://github.com/jaumoso',
      },
      {
        label: 'Goodreads',
        icon: 'goodreads',
        url: 'https://www.goodreads.com/user/show/112380807-jaume',
      },
      {
        label: 'Instagram',
        icon: 'instagram',
        url: 'https://www.instagram.com/jaumoso/',
      },
      {
        label: 'Steam',
        icon: 'steam',
        url: 'https://steamcommunity.com/id/jaumec/',
      },
      {
        label: 'Strava',
        icon: 'strava',
        url: 'https://www.strava.com/athletes/jaumoso',
      },
      {
        label: 'Spotify',
        icon: 'spotify',
        url: 'https://open.spotify.com/user/jaumoso23',
      },
    ],
  },
}

export default config
