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
      // const data = {
      //   title: title.value,
      //   description: description.value,
      //   price: price.value,
      //   condition: condition.value,
      //   city: city.value,
      //   brand: brand.value,
      //   size: size.value,
      //   color: color.value,
      // };
      // console.log(data);

      let pic = picture.files[0];

      let formData = new FormData();
      formData.set("picture", pic);
      formData.set("title", title.value);
      formData.set("description", description.value);
      formData.set("price", price.value);
      formData.set("condition", condition.value);
      formData.set("city", city.value);
      formData.set("brand", brand.value);
      formData.set("size", size.value);
      formData.set("color", color.value);

      axios
        .post(
          "https://vinted--difficult-club--56xblq4s6sr6.code.run/offer/publish",
          formData
        )
        .then((response) => {
          console.log(response.data); // Affichera la réponse du serveur
          alert("annonce ajouter");
        })
        .catch((error) => {
          console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
        });
    });
});
