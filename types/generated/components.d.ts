import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCollapsibleContentCard extends Schema.Component {
  collectionName: 'components_blocks_collapsible_content_cards';
  info: {
    displayName: 'collapsibleContent';
    icon: 'cube';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.String;
  };
}

export interface BlocksFeatureCard extends Schema.Component {
  collectionName: 'components_blocks_feature_cards';
  info: {
    displayName: 'FeatureCard';
    icon: 'cube';
  };
  attributes: {
    heading: Attribute.String;
    body: Attribute.Text;
    buttonText: Attribute.String;
    secondaryButtonText: Attribute.String;
    featureImage: Attribute.Media;
  };
}

export interface BlocksSeo extends Schema.Component {
  collectionName: 'components_blocks_seos';
  info: {
    displayName: 'SEO';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
    metadescription: Attribute.String;
    slug: Attribute.String;
  };
}

export interface ComponentsCollapsibleContent extends Schema.Component {
  collectionName: 'components_components_collapsible_contents';
  info: {
    displayName: 'CollapsibleContent';
    icon: 'folder';
    description: '';
  };
  attributes: {
    collapsibleContent: Attribute.Component<
      'blocks.collapsible-content-card',
      true
    >;
  };
}

export interface ComponentsCta extends Schema.Component {
  collectionName: 'components_components_ctas';
  info: {
    displayName: 'CTA';
    icon: 'folder';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    body: Attribute.Text;
    buttonText: Attribute.String;
    alignment: Attribute.Enumeration<['left', 'center', 'right']>;
  };
}

export interface ComponentsFeatureCards extends Schema.Component {
  collectionName: 'components_components_feature_cards';
  info: {
    displayName: 'FeatureCards';
    icon: 'folder';
  };
  attributes: {
    Feature: Attribute.Component<'blocks.feature-card', true>;
  };
}

export interface ComponentsHero extends Schema.Component {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'hero';
    icon: 'folder';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    topHeading: Attribute.String;
    body: Attribute.String;
    buttonText: Attribute.String;
    alignment: Attribute.Enumeration<['left', 'center', 'right']>;
    imageURL: Attribute.Media;
    imagePosition: Attribute.Enumeration<['above', 'below']>;
    isHighlight: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.collapsible-content-card': BlocksCollapsibleContentCard;
      'blocks.feature-card': BlocksFeatureCard;
      'blocks.seo': BlocksSeo;
      'components.collapsible-content': ComponentsCollapsibleContent;
      'components.cta': ComponentsCta;
      'components.feature-cards': ComponentsFeatureCards;
      'components.hero': ComponentsHero;
    }
  }
}
