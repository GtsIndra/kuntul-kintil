let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
Dibuat dengan bahasa javascript via NodeJs

➥ Github: https://github.com/GtsIndra/Gts-Indra
➥ Instagram: instagram.com/rahasia
➥ YouTube: Gts Gakure

〘 Thanks To 〙 
➥ YANG BACA :V

〘 DONASI 〙 
➥ pulsa : 0878-9970-4530
➥ dana: 0878-9970-4530
➥ ovo: 0878-9970-4530


〘 Gts-Indra〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

