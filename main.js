// const Nattack = document.getElementsByClassName("Nattack")[0];
// const Kattack = document.getElementsByClassName("Kattack")[0];
// const NmakeHealth = document.getElementsByClassName("NmakeHealth")[0];
// const KmakeHealth = document.getElementsByClassName("KmakeHealth")[0];
// const NprogressBar = document.querySelector(".NprogressBar span");
// const KprogressBar = document.querySelector(".KprogressBar span");

// console.log(NprogressBar);
// console.log(KprogressBar);
// console.log(NmakeHealth);
// console.log(KmakeHealth);

function Character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.elements = new UIelement(this.name);
}
function UIelement(name) {
  this.attackBtn = document.querySelector(`#${name}-attack`);
  this.healthBtn = document.querySelector(`#${name}-makeHealth`);
  this.StatusBtn = document.querySelector(`#${name}-statusBtn`);
  this.progressBar = document.querySelector(`#${name}-health`);
  this.StatusP = document.querySelector(`#${name}-status`);
}
Naruto = new Character("Naruto", 10, 100);
Kakashi = new Character("Kakashi", 5, 100);

Character.prototype.attach = function (enemy) {
  enemy.health -= this.strength;
  enemy.elements.progressBar.style.width = `${enemy.health}%`;
};
Character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
  }
  if (this.health > 100) {
    this.health = 100;
  }
  this.elements.progressBar.style.width = `${this.health}%`;
};
Character.prototype.status = function () {
  const print = `
  Name: ${this.name}
  Strength: ${this.strength}
  Total Health: ${this.health}
  `;
  this.elements.StatusP.innerText = print;
};

Naruto.elements.attackBtn.addEventListener("click", (eo) => {
  Naruto.attach(Kakashi);
  // Kakashi.elements.progressBar.style.width = `${Kakashi.health}%`;
});
Kakashi.elements.attackBtn.addEventListener("click", (eo) => {
  Kakashi.attach(Naruto);
  // Naruto.elements.progressBar.style.width = `${Naruto.health}%`;
});
Naruto.elements.healthBtn.addEventListener("click", (eo) => {
  Naruto.makeHealth();
  // NprogressBar.style.width = `${Naruto.health}%`;
});
Kakashi.elements.healthBtn.addEventListener("click", (eo) => {
  Kakashi.makeHealth();
  // KprogressBar.style.width = `${Naruto.health}%`;
});
Naruto.elements.StatusBtn.addEventListener("click", (eo) => {
  Naruto.status(Naruto);
});
Kakashi.elements.StatusBtn.addEventListener("click", (eo) => {
  Kakashi.status(Kakashi);
});
