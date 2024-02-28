import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed');

class ImageUpload extends BlockEmbed {
  static create(value) {
    const node = super.create();
    node.setAttribute('src', value.url);
    node.setAttribute('alt', value.alt);
    node.setAttribute('style', 'max-width: 100%;');
    return node;
  }

  static value(node) {
    return {
      url: node.getAttribute('src'),
      alt: node.getAttribute('alt'),
    };
  }
}

ImageUpload.blotName = 'imageUpload';
ImageUpload.className = 'image-upload';
ImageUpload.tagName = 'img';

export default ImageUpload;
