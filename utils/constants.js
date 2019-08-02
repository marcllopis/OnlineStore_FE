const ArrayFallbackCoverImageAlbum = [
  'https://images.unsplash.com/photo-1563930365798-3014c158554f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2527&q=80',
  'https://images.unsplash.com/photo-1563759553854-95ea771b8932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1248&q=80',
  'https://images.unsplash.com/photo-1562874724-b33411b38141?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
  'https://images.unsplash.com/photo-1562592199-8aed6ae5252d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
  'https://images.unsplash.com/photo-1562824429-7c023697286d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  'https://images.unsplash.com/photo-1562670652-e5947bddb335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
  'https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
  'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
  'https://images.unsplash.com/photo-1462842846914-31ab9f19373a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80',
  'https://images.unsplash.com/photo-1560372610-931c8343bc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80',
  'https://images.unsplash.com/photo-1549922470-949c45715199?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
];

export const RandomFallbackCoverImageAlbum = () => (
  ArrayFallbackCoverImageAlbum[Math.floor(Math.random() * ArrayFallbackCoverImageAlbum.length)]
);