import { Component } from '@angular/core';

@Component({
  selector: 'app-bored-ape',
  templateUrl: './bored-ape.component.html',
  styleUrl: './bored-ape.component.css'
})
export class BoredApeComponent {

  nft: any = [
  {
    id: 1,
    name: "#1713",
    price: "11.288 ETH",
    salesEnd: "November 7, 2024 at 1:40 PM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "A66D37",
    favoriteCount: 63,
    imageUrl: "https://i.seadn.io/gae/-6tkUfYC8uywRQ1zN6tHrN76ZyNoA8e-YQf1aUlxA3DiJiiC5IO_VNIHZf3Y_TF7Pc0qfO5evBtk_nHiahnSKtjxseCOeY7bZZDAgQ0?auto=format&dpr=1&w=1000",
    background: "Aquamarine 13% Floor: 11.288 ETH",
    clothes: "Bone Tee 2% Floor: 11.288 ETH",
    eyes: "Closed 7% Floor: 11.288 ETH",
    fur: "Gray 5% Floor: 11.288 ETH",
    hat: "Fisherman's Hat 3% Floor: 11.288 ETH",
    mouth: "Bored 23% Floor: 11.288 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "1713",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 2,
    name: "#6281",
    price: "11.37 ETH",
    salesEnd: "November 7, 2024 at 7:57 PM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "B3BBB0",
    favoriteCount: 40,
    imageUrl: "https://i.seadn.io/gae/wpMBP7SYSlW5LTb-LZzGht-72NRFrpRXoBN8sBLy7f_rhbmKwjEruXeE9RBf6ccI8WI9MAfGRBi-MXk7W8sx3-ZtgplkUUDJzERl?auto=format&dpr=1&w=1000",
    background: "Blue 12% Floor: 11.237 ETH",
    clothes: "Bandolier 2% Floor: 11.237 ETH",
    eyes: "Closed 7% Floor: 11.237 ETH",
    fur: "White 4% Floor: 11.237 ETH",
    hat: "Sushi Chef Headband 2% Floor: 11.237 ETH",
    mouth: "Phoneme L 2% Floor: 11.237 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "6281",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 3,
    name: "#8788",
    price: "11.396 ETH",
    salesEnd: "November 9, 2024 at 7:09 PM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "BoredGods",
    favoriteCount: 76,
    imageUrl: "https://i.seadn.io/gae/j3bQWTgL9sefRGVnW-QKKfTM7avknX1ihO-L17jH8gyDAEJz_PILwkwhgnzNdBeoZvtKbtc_07Gi0W_amBHjYujD3mDUCaiD521k03w?auto=format&dpr=1&w=1000",
    background: "Purple 13% Floor: 11.396 ETH",
    clothes: "Guayabera 2% Floor: 11.396 ETH",
    eyes: "Coins 5% Floor: 11.396 ETH",
    fur: "Pink 5% Floor: 11.396 ETH",
    hat: "Seaman's Hat 4% Floor: 11.396 ETH",
    mouth: "Bored Pizza 0.50% Floor: 11.396 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "8788",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 4,
    name: "#7279",
    price: "11.396 ETH",
    salesEnd: "November 9, 2024 at 7:09 PM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "GoldenBronnyx2",
    favoriteCount: 76,
    imageUrl: "https://i.seadn.io/gae/mjEXJyOm7LBL4WvsSLVR768Ek9TYJAqx_4LQJ7wWSds04EiLqaZAHvENCyYKeUrEmcKSwIXWnJBYdv1BpMw6vcLVDt3dU3SR0Z9QVw?auto=format&dpr=1&w=1000",
    background: "Purple 13% Floor: 11.396 ETH",
    clothes: "Vietnam Jacket 2% Floor: 11.5 ETH",
    earring: "Silver Stud 8% Floor: 11.45 ETH",
    eyes: "3d 5% Floor: 11.39 ETH",
    fur: "Brown 14% Floor: 11.222 ETH",
    mouth: "Brown 14% Floor: 11.222 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "7279",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 5,
    name: "#8643",
    price: "11.4269 ETH",
    salesEnd: "October 20, 2024 at 3:20 PM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "HossDaBoss",
    favoriteCount: 24,
    imageUrl: "https://i.seadn.io/gae/GObj3js4T4HblwKjLfEG9MRT_9YJVsNUIZaDLyWDc6M1XKjHThMy-z7NtTEAaqN6NAhtdLBFo1DUkhwxdMK7b5GJ9tBa8NrlZOCQMw?auto=format&dpr=1&w=1000",
    background: "New Punk Blue 12% Floor: 11.4269 ETH",
    clothes: "Tanktop2% Floor: 11.4269 ETH",
    earring: "Sleepy 8% Floor: 11.4269 ETH",
    eyes: "Robot 3% Floor: 11.4269 ETH",
    fur: "Spinner Hat 2% Floor: 11.4269 ETH",
    mouth: "Tounge Out 2% Floor: 11.4269 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "8643",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 6,
    name: "#6838",
    price: "11.396 ETH",
    salesEnd: "November 9, 2024 at 4:22 AM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.Category PFPs",
    owned: "DynastyX",
    favoriteCount: 24,
    imageUrl: "https://i.seadn.io/gae/Gvdc5gIru1ntUyNczVZ6tXgZYXwkdfVDgfJoBTXuT7TVSntlkMZ1uGD3cikzHNDOWancC8q35FIFXc0ajvPmTGGk-meB6AVSwfulcw?auto=format&dpr=1&w=1000",
    background: "Blue 12% Floor: 11.37 ETH",
    hat: "Cowboy Hat 4% Floor: 11.5 ETH",
    earring: "Silver Hoop 9% Floor: 11.5 ETH",
    eyes: "Sleepy 8% Floor: 11.4269 ETH",
    fur: "Dark Brown 14% Floor: 11.4269 ETH",
    mouth: "Bored Unshaven Party Horn 14% Floor: 11.8765 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "6838",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 7,
    name: "#8173",
    price: "12.99 ETH",
    salesEnd: "October 15, 2024 at 11:38 PM ",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.Category PFPs",
    owned: "NFTinitcom_DM_Crypdog...",
    favoriteCount: 22,
    imageUrl: "https://i.seadn.io/gae/isDiqMaRuYuek-DAu-XbCmg-xKj_vBvqlgFVD-nvMPAqruIz4inNcZK9L2LL8TPci59Hhg_W9NeGr0dqKiP_KYMGSqTymk04QcPaoJc?auto=format&dpr=1&w=1000",
    background: "Yellow 13% Floor: 12.2 ETH",
    clothes: "Bayc Red 1% Floor: 12.74 ETH",
    earring: "Cross 1% Floor: 12.99 ETH",
    eyes: "Sleepy 8% Floor: 11.4269 ETH",
    fur: "Black 12% Floor: 12.75 ETH",
    hat: "Baby's Bonnet 2% Floor: 12.99 ETH",
    mouth: "Phoneme Vuh 14% Floor: 12.99 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "8173",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 8,
    name: "#8944",
    price: "11.396 ETH",
    salesEnd: "November 9, 2024 at 7:09 PM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "0x183fbb",
    favoriteCount: 45,
    imageUrl: "https://i.seadn.io/gae/JuQHPkErFScGb7O61h69BIbhjRAX9TswDvfxXPi1t4B08HNev5jCmErr9e1sS2v_flBX6PieMLJXDSUcsUr23VLZ_df9IWksgpm3?auto=format&dpr=1&w=1000",
    background: "Blue 12% Floor: 11.37 ETH",
    clothes: "Toga 2% Floor: 14.9 ETH",
    earring: "Silver Stud 8% Floor: 11.45 ETH",
    eyes: "Bored 17% Floor: 11.222 ETH",
    fur: "Zombie 3% Floor: 14.9 ETH",
    hat: "Prussian Helmet 1% Floor: 14.9 ETH",
    mouth: "Bored 14% Floor: 11.288 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "8944",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 9,
    name: "#2631",
    price: "11.396 ETH",
    salesEnd: "October 12, 2024 at 11:38 AM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "FUCKYOCOUCH69",
    favoriteCount: 22,
    imageUrl: "https://i.seadn.io/gae/p-6MSLRl7G3mxkjoFaOJS0dA4Kf0-19lX1RHLulow9l0OfR_b0EaonuEBsE801PvSKe09nkjE5Ym8BbA2rO8OSjy0XE_Pn4vBIa11g?auto=format&dpr=1&w=1000",
    background: "Army Green 12% Floor: 11.5 ETH",
    clothes: "Pimp Coat 2% Floor: 15 ETH",
    eyes: "Bloodshot 8% Floor: 11.5 ETH",
    fur: "Black 12% Floor: 11.396 ETH",
    hat: "Seaman's Hat 4% Floor: 12.75 ETH",
    mouth: "Bored 23% Floor: 11.288 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "2631",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 10,
    name: "#7693",
    price: "12.75 ETH",
    salesEnd: "October 17, 2024 at 11:25 PM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "Lucidity-Friedman2",
    favoriteCount: 132,
    imageUrl: "https://i.seadn.io/gae/awlHMs7ZVRLxuiJJ84CylogTTmTYRUTt_pPdWI6oED_60LOGSnH5pnQxpceQcQvUQL7uM4BQlPaBJuvn-pq7xkatOuqj2_nc3SCkeKk?auto=format&dpr=1&w=1000",
    background: "New Punk Blue 12% Floor: 11.4269 ETH",
    clothes: "Biker Vest 3% Floor: 12.75 ETH",
    eyes: "Sleepy 8% Floor: 11.4269 ETH",
    fur: "Black 12% Floor: 12.75 ETH",
    hat: "Bayc Hat Red 1% Floor: 12.75 ETH",
    mouth: "Dumbfounded 5% Floor: 11.8765 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "7693",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 11,
    name: "#3857",
    price: "12.1649 ETH",
    salesEnd: "October 12, 2024 at 12:39 AM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "ExoticRaccoon",
    favoriteCount: 36,
    imageUrl: "https://i.seadn.io/gae/paj0i3NrC-csXVgL3kO5ERvSTCKpp-XsbGgOfXq2ZKINobqiaBQ4sPX9FG4pMW8TqT_S45dsMAW0xaJdjQsjWwo9EOwKOrKlN6AOhGE?auto=format&dpr=1&w=1000",
    background: "Blue 12% Floor: 11.37 ETH",
    clothes: "Prison Jumpsuit 2% Floor: 12.1649 ETH", 
    eyes: "Heart 4% Floor: 12.1649 ETH",
    fur: "Cheetah 4% Floor: 12.1649 ETH",
    earring: "Fez 4% Floor: 12.1649 ETH",
    mouth: "Bored Unshaven 16% Floor: 12.1649 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "3857",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },

  {
    id: 12,
    name: "#1099",
    price: "15.79 ETH",
    salesEnd: "October 18, 2024 at 10:31 AM",
    about: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. Category PFPs",
    owned: "BoredBavi",
    favoriteCount: 110,
    imageUrl: "https://i.seadn.io/gae/7J19B0c2r7u3sbBy91uncDKkok1cRxLp7rs3ylF88Dq6iXncf6JaRa0AQl03TwIlT4A3mgRFtK8Fj7FQXLoViKgsvgJDBiDrdbgtwA?auto=format&dpr=1&w=100000",
    background: "Orange 13% Floor: 11.4269 ETH",
    clothes: "Space Suit 1% Floor: 15.79 ETH",
    eyes: "Holographic 2% Floor: 15.79 ETH",
    fur: "Golden Brown 8% Floor: 11.98 ETH",
    hat: "Halo 3% Floor: 12.88 ETH",
    mouth: "Bored Cigarette 7% Floor: 11.45 ETH",
    contractAddress: "0xbc4c...f13d",
    tokenId: "1099",
    tokenStandard: "ERC-721",
    Chain: "Ethereum",
    metadata: "Frozen",
    creatorEarnings: "1%",
    visible: false,
  },
]

selectedNft: any = null;

selectNft(nftItem: any): void {
  this.selectedNft = nftItem;
}

clearSelection(): void {
  this.selectedNft = null;
}
}