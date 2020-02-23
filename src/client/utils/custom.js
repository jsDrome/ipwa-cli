/* eslint-disable no-magic-numbers */
import list from '../list';
import { URL, DESCRIPTION } from '../../variables';

export const getMetaTags = (folder = 'home', subfolder = 'home', post = 'home') => {
  let selectedList = list[0];
  let selectedPost = selectedList.links[0];
  let { title, ogTitle, description, ogDescription, ogImage } = selectedPost;
  let postUrl = '/';
  let selectedListTitle = selectedList.title;
  let selectedLinkTitle = selectedPost.title;

  list.forEach(item => {
    const selectedPost = item.links.find(l => l.route === `/post/${folder}/${subfolder}/${post}`);
    if (selectedPost) {
      title = selectedPost.title + ' | ' + DESCRIPTION || title;
      ogTitle = selectedPost.ogTitle || ogTitle;
      description = selectedPost.description || description;
      ogDescription = selectedPost.ogDescription || ogDescription;
      ogImage = selectedPost.ogImage || ogImage;
      postUrl = folder === 'home' ? '/' : `/post/${folder}/${subfolder}/${post}`;
      selectedListTitle = item.title;
      selectedLinkTitle = selectedPost.title;
    }
  });

  return {
    title,
    ogTitle,
    description,
    ogDescription,
    ogImage,
    ogUrl: `${URL}${postUrl}`,
    selectedListTitle,
    selectedLinkTitle,
  };
};

export const getLinks = (folder = 'home', subfolder = 'home', post = 'home') => {
  const allLinks = list.reduce((acc, item) => acc.concat(item.links), []);
  const selectedPostIndex = allLinks.findIndex(l => l.route === `/post/${folder}/${subfolder}/${post}`);

  return {
    prevLink: selectedPostIndex !== 0 ? selectedPostIndex === 1 ? '/' : allLinks[selectedPostIndex - 1].route : null,
    prevTitle: selectedPostIndex !== 0 ? allLinks[selectedPostIndex - 1].title : null,
    currentLink: allLinks[selectedPostIndex].route,
    currentTitle: allLinks[selectedPostIndex].title,
    nextLink: selectedPostIndex !== allLinks.length - 1 ? allLinks[selectedPostIndex + 1].route : null,
    nextTitle: selectedPostIndex !== allLinks.length - 1 ? allLinks[selectedPostIndex + 1].title : null,
  };
};