
type blog = {
    id: number;
    title: string;
    meta_title: string | null;
    mainpage_title: string | null;
    authors: number[];
    author_name: string | null;
    author_url: string | null;
    author_photo: string | null;
    date: Date;
    slug: string;
    redirects: string[];
    tags: { id: number; name: string; slug: string }[];
    categories: number[];
    youtube: string | null;
    published: boolean;
    event: boolean;
    news: boolean;
    calendar_id: number | null;
    banner: number | null;
    related_posts: number[];
    thumb: string | null;
    thumb_alt: string | null;
    narrow_thumb: string | null;
    intro: string | null;
    meta_description: string | null;
    read_time: number;
}

export const postInfoFields = [
	'authors',
	'author_name',
	'author_url',
	'author_photo',
	'date',
	'read_time',
] as const;

export const blogPostFields = [
	'title',
	'slug',
	'intro',
	'thumb',
	'narrow_thumb',
	'thumb_alt',
	...postInfoFields,
] as const;

export interface BlogPostData {
	id?: number;
	title: string;
	meta_title: string;
	mainpage_title: string;
	authors: number[];
	author_name: string;
	author_url: string;
	author_photo?: string;
	date: string;
	slug: string;
	redirects: string[];
	tags: string;
	categories: number[];
	youtube: string;
	published: boolean;
	event: boolean;
	news: boolean;
	banner?: number;
	related_posts: number[];
	thumb?: string;
	thumb_alt: string;
	narrow_thumb?: string;
	intro: string;
	meta_description: string;
	text: string;
}

export interface BlogPostsParams<F = keyof blog> {
	select?: readonly F[];
	includeDrafts?: boolean;
	event?: boolean;
	news?: boolean;
	newsOrEvents?: boolean;
	tag?: string;
	category?: number;
	limit?: number;
	offset?: number;
}

const savePost = async (data: BlogPostData) => {
	// Implementation to save a blog post
};

const deletePost = async (id: blog['id']) => {
	// Implementation to delete a blog post
};

const getBlogPosts = async (params: Omit<BlogPostsParams, 'select'> & { select: readonly (keyof blog)[] }) => {
	// Implementation to get blog posts based on parameters
};

const upvote = async (postId: blog['id']) => {
	// Implementation to upvote a blog post
};

export async function onSavePost(data: BlogPostData) {
	return savePost(data);
}

export async function onDeletePost(id: blog['id']) {
	return deletePost(id);
}

export async function onGetBlogPosts(params: Omit<BlogPostsParams, 'select'>) {
	return getBlogPosts({ ...params, select: ['id', ...blogPostFields] });
}

export async function onUpvotePost(postId: blog['id']) {
	return upvote(postId);
}
