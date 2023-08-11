let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐜𝐨𝐢𝐧𝐲.𝐟𝐟: ${pesan}`
let teks = `𝘾𝙤𝙢𝙚 𝙤𝙣 𝘽𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡 - 𝘾𝙤𝙞𝙣𝙮 𝘽𝙤𝙩 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `♡⃘💗꒰  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝘾𝙤𝙞𝙣𝙮 𝘽𝙤𝙩 🩸`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
