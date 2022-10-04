
// tambahkan value baru pada object nama aba yaitu is_add: true
  const humans = [
    { id: 2, nama: 'aba', kota: 'jogja' },
    { id: 1, nama: 'baba', kota: 'jakarta' },
    { id: 3, nama: 'caba', kota: 'jakarta' }
  ];

  const result  = humans.filter((human) => {
    humans.push ("is_add: true");

    return (result)