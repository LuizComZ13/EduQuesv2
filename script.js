const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;

  if (!name || !service) {
    alert("Preencha todos os campos.");
    return;
  }

  const services = {
    demo: "Demonstração",
    preco: "Preços",
    teste: "Teste grátis"
  };

  const message = `Olá! Meu nome é ${name} e tenho interesse em ${services[service]}.`;

  const url = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

  form.reset();
});