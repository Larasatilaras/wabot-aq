let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo
│ • 0857-5966-2798
╰────

╭─「 Donasi • Bank Virtual 」
│ • OVO
│ • 0857-5966-2798
│ • DANA
│ • 0857-5966-2798
│ • GOPAY
│ • 0857-5966-2798
╰────

╭─「 Donasi • Website 」
│ • https://saweria.co/Larasatilaras
│ • https://trakteer.id/Larasatilaras
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
