export interface IFeedResponse {
  feed: {
    entry: IApplicationProps[];
  };
}

export interface IApplicationProps {
  'im:name': Label;
  'im:image': Image[];
  summary: Label;
  'im:price': Price;
  'im:contentType': ContentType;
  rights: Label;
  title: Label;
  link: Link[];
  id: ID;
  'im:artist': Artist;
  category: Category;
  'im:releaseDate': ReleaseDate;
}

export interface Label {
  label: string;
}

export interface Image {
  label: string;
  attributes: {
    height: string;
  };
}

export interface Price {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
}

export interface ContentType {
  attributes: {
    term: string;
    label: string;
  };
}

export interface Link {
  attributes: {
    rel: string;
    type: string;
    href: string;
    title?: string;
    'im:assetType'?: string;
  };
  'im:duration'?: Label;
}

export interface ID {
  label: string;
  attributes: {
    'im:id': string;
    'im:bundleId': string;
  };
}

export interface Artist {
  label: string;
  attributes: {
    href: string;
  };
}

export interface Category {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  };
}

export interface ReleaseDate {
  label: string;
  attributes: {
    label: string;
  };
}
