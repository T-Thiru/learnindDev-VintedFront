document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("product_name");
  const description = document.getElementById("product_detail");
  const price = document.getElementById("product_price");
  const condition = document.getElementById("product_detail");
  const city = document.getElementById("product_city");
  const brand = document.getElementById("product_brand");
  const size = document.getElementById("product_size");
  const color = document.getElementById("product_color");
  const picture = document.getElementById("product_pic");

  document
    .getElementById("submitOffer")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        title: title.value,
        description: description.value,
        price: price.value,
        condition: condition.value,
        city: city.value,
        brand: brand.value,
        size: size.value,
        color: color.value,
        picture: picture.value,
      };

      const response = await axios.post(
        "http://localhost:3000//offer/publish",
        data
      );
      console.log(response.data);
      alert("annonce ajouter");
    });
});
