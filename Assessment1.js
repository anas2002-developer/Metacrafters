let nfts = [];

function mintNFT(name, eyeColor, shirtType, bling) {
  let nft = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling
  };

  nfts.push(nft);
}

function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("NFT " + (i + 1) + " Details:");
    console.log("Name: " + nfts[i].name);
    console.log("Eye Color: " + nfts[i].eyeColor);
    console.log("Shirt Type: " + nfts[i].shirtType);
    console.log("Bling: " + nfts[i].bling);
    console.log("--------------------");
  }
}

function getTotalSupply() {
  console.log("Total NFTs Minted: " + nfts.length);
}


mintNFT("NFT 1", "Blue", "T-Shirt", "Diamond Necklace");
mintNFT("NFT 2", "Green", "Hoodie", "Gold Watch");
mintNFT("NFT 3", "Red", "Tank Top", "Silver Bracelet");

listNFTs();

getTotalSupply();
