export interface IProduct {
  product_id: number;
  name: string;
  quantity_available: number;
  created_by: {
    display_name: string;
  };
  latest_price: string;
  /* "description":"META PUNK\n\n\u00a0This work will be the first in a series of magical digital talismans that will endow their owners with super cosmic level abilities and universal freedom of mind in creative manifestations.\n\n\u00a02050 year. Economic and cultural globalization is in full swing, and perhaps political globalization is on the way. A world parliament doesn't seem like such a crazy idea anymore. But what should it be? History shows that humanity and individual civilizations, in principle, strive for the disappearance of the boundaries of \"geostates\" (typical geographically tied and national countries). And to unite humanity into one state, one big, common problem is enough - it can be global warming.\n\u00a0The society is engaged in heated discussions and is already practically divided into two sides of the camp. One side is the adherents of autocracy and one-man AI rule. The second one - uniocracy - is a collective consciousness, a collective human mind that combines the consciousness of all people with the help of telepathy or technology.\n\u00a0Meta Punks understands that the development of artificial intelligence is fraught with both opportunities and threats. Once complex and powerful enough, the AI \u200b\u200bwill be able to proclaim itself a singleton - the sole ruler, the head of a new world order in which key issues are decided by one person or agency.\n\u00a0Well, what if our planet is ruled by a single swarm intelligence? Perhaps such an intelligence will make fair and correct decisions based on collective experience, and easily solve all the problems that will arise in the way of society. But, unitocracy implies colossal cultural and sociological changes, to which society is not yet ready.\n\n\u00a0Therefore, Meta Punks is against both versions of the development of events. Their ideology is panarchic polystates. The idea of \u200b\u200b\"polystates\" does not imply a specific form of government, but a Meta-country in which each person is free to choose a new constitution without having to physically change their place of residence. Each such Meta-country consists of citizens who agreed with its uniform laws, regardless of the place of residence of a particular person.\n\n\u00a0Meta Punk Manifesto:\n\u00a0\u201cBut the truth is that there is no \u201ccorrect\u201d freedom: as if a person always chooses only between freedom and slavery. Everyone in this case is his own judge, and he decides based on personal preferences. .... Therefore, I demand, for the good of every person, freedom of association according to preference and freedom of activity according to ability. That is, complete freedom to choose in what political conditions to live and nothing more.\u201d",
"quantity":1,
"initial_price":0.2,
"type":"digital fashion",
"avatar":{},
"other_file":{
"original":"295_999a819d-f7ec-4f1c-8d8e-69996d7e3239.zprj"
},
"additional_photos":[],
"created_by":{},
"json_nft_data":{},
"json_nft_link":"ipfs://QmSxS6WhBat6qvPwkU8h6AFJJ8brM3po4eoR6XbFEZ2fwu",
"tx_status":"success",
"created_at":"2022-01-23 18:26:58.635227",
"updated_at":"2022-01-23 18:26:58.635227",
"quantity_nfts_created":1,
"on_main_page":true,
"is_wearable":true,
"quantity_available":1/*/
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
