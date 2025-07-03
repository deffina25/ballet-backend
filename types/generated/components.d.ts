import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutUsBlock1 extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_block_1s';
  info: {
    displayName: 'about-us-block-1';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name1: Schema.Attribute.String;
    name2: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
  };
}

export interface AboutUsAboutUsBlock2 extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_block_2_s';
  info: {
    displayName: 'about-us-block-2 ';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsAboutUsBlock3 extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_block_3s';
  info: {
    displayName: 'about-us-block-3';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    more: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
  };
}

export interface AboutUsAboutUsBlock4 extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_block_4s';
  info: {
    displayName: 'about-us-block-4';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
  };
}

export interface AboutUsAboutUsBlock5 extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_block_5s';
  info: {
    displayName: 'about-us-block-5';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    image_1: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    image_2: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    url: Schema.Attribute.String;
  };
}

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    video: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-us-block-1': AboutUsAboutUsBlock1;
      'about-us.about-us-block-2': AboutUsAboutUsBlock2;
      'about-us.about-us-block-3': AboutUsAboutUsBlock3;
      'about-us.about-us-block-4': AboutUsAboutUsBlock4;
      'about-us.about-us-block-5': AboutUsAboutUsBlock5;
      'home.about': HomeAbout;
      'home.banner': HomeBanner;
    }
  }
}
