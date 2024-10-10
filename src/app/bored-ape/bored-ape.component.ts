import { Component } from '@angular/core';

@Component({
  selector: 'app-bored-ape',
  templateUrl: './bored-ape.component.html',
  styleUrl: './bored-ape.component.css'
})
export class BoredApeComponent {

  nft = [
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
    }
  ];
  isHidden: boolean = true; 
  seeMore() {
    this.isHidden = !this.isHidden; 
  }
}
