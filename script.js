const goodbye = (name) => {
    document.querySelector('.email__closing').textContent = `S pozdravem ${name}`;
};

// Zavolání funkce s konkrétním jménem
goodbye('Pavel Ovesný');