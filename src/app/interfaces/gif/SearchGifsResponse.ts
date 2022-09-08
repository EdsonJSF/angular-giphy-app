export interface SearchGifsResponse {
  data:       Gif[];
  meta:       Meta;
  pagination: Pagination;
}

export interface Gif {
  analytics:                  Analytics;
  analytics_response_payload: string;
  bitly_gif_url:              string;
  bitly_url:                  string;
  content_url:                string;
  embed_url:                  string;
  id:                         string;
  images:                     Images;
  import_datetime:            Date;
  is_sticker:                 number;
  rating:                     Rating;
  slug:                       string;
  source:                     string;
  source_post_url:            string;
  source_tld:                 string;
  title:                      string;
  trending_datetime:          string;
  type:                       Type;
  url:                        string;
  user?:                      User;
  username:                   string;
}

interface Analytics {
  onclick: Onclick;
  onload:  Onclick;
  onsent:  Onclick;
}

interface Onclick {
  url: string;
}

interface Images {
  "480w_still":             The480_WStill;
  downsized:                The480_WStill;
  downsized_large:          The480_WStill;
  downsized_medium:         The480_WStill;
  downsized_small:          DownsizedSmall;
  downsized_still:          The480_WStill;
  fixed_height:             FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small:       FixedHeight;
  fixed_height_small_still: The480_WStill;
  fixed_height_still:       The480_WStill;
  fixed_width:              FixedHeight;
  fixed_width_downsampled:  FixedHeight;
  fixed_width_small:        FixedHeight;
  fixed_width_small_still:  The480_WStill;
  fixed_width_still:        The480_WStill;
  hd?:                      DownsizedSmall;
  looping:                  Looping;
  original:                 FixedHeight;
  original_mp4:             DownsizedSmall;
  original_still:           The480_WStill;
  preview:                  DownsizedSmall;
  preview_gif:              The480_WStill;
  preview_webp:             The480_WStill;
}

interface The480_WStill {
  height: string;
  size:   string;
  url:    string;
  width:  string;
}

interface DownsizedSmall {
  height:   string;
  mp4:      string;
  mp4_size: string;
  width:    string;
}

interface FixedHeight {
  frames?:   string;
  hash?:     string;
  height:    string;
  mp4?:      string;
  mp4_size?: string;
  size:      string;
  url:       string;
  webp:      string;
  webp_size: string;
  width:     string;
}

interface Looping {
  mp4:      string;
  mp4_size: string;
}

enum Rating {
  G = "g",
  PG = "pg",
}

enum Type {
  GIF = "gif",
}

interface User {
  avatar_url:    string;
  banner_image:  string;
  banner_url:    string;
  description:   string;
  display_name:  string;
  instagram_url: string;
  is_verified:   boolean;
  profile_url:   string;
  username:      string;
  website_url:   string;
}

interface Meta {
  msg:         string;
  response_id: string;
  status:      number;
}

interface Pagination {
  count:       number;
  offset:      number;
  total_count: number;
}
