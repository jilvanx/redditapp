type Media_embed = {};

type Secure_media_embed = {};

type Gilding = {};

type Source = {
  url: string;
  width: number;
  height: number;
};

type Resolution = {
  url: string;
  width: number;
  height: number;
};

type Variant = {};

type Image = {
  source: Source;
  resolutions: Resolution[];
  variants: Variant;
  id: string;
};

type Preview = {
  images: Image[];
  enabled: boolean;
};

type PostData = {
  approved_at_utc?: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls?: any;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height: number;
  top_awarded_type?: any;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color?: any;
  ups: number;
  total_awards_received: number;
  media_embed: Media_embed;
  thumbnail_width: number;
  author_flair_template_id?: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media?: any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category?: any;
  secure_media_embed: Secure_media_embed;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by?: any;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class?: any;
  author_flair_richtext: any[];
  gildings: Gilding;
  post_hint: string;
  content_categories: string[];
  is_self: boolean;
  subreddit_type: string;
  created: number;
  link_flair_type: string;
  wls?: any;
  removed_by_category?: null;
  banned_by?: any;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html?: any;
  likes?: any;
  suggested_sort?: any;
  banned_at_utc?: any;
  url_overridden_by_dest: string;
  view_count?: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview;
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: any;
  treatment_tags: any[];
  visited: boolean;
  removed_by?: null;
  mod_note?: null;
  distinguished?: any;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by?: any;
  num_reports?: any;
  removal_reason?: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons?: any;
  author: string;
  discussion_type?: any;
  num_comments: number;
  send_replies: boolean;
  whitelist_status?: any;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color?: any;
  permalink: string;
  parent_whitelist_status?: any;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media?: any;
  is_video: boolean;
};

export type Children = {
  kind: string;
  data: PostData;
};

type Data = {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: string;
  children: Children[];
  before: null;
};

export type PostResponse = {
  kind: string;
  data: Data;
};

export enum PostType {
  New = "new",
  Top = "top",
  Popular = "popular",
  Hot = "hot",
}
