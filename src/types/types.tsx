export interface IProduct {
  product_id: number;
  name: string;
  quantity_available: number;
  created_by: {
    display_name: string;
  };
  latest_price: string;
}

export interface ICreator {
  user_id: number;
  display_name: string;
  public_address: string;
  custom_url: string;
  image: {
    original: string;
    compressed: string;
  };
}

export interface IResponse {
  status: string;
  data: {
    products: Array<IProduct>;
    creators: Record<string, ICreator>;
  };
}

export interface IFiltersState {
  availability: boolean;
}
