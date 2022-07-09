//═══════════════════════════════════════════════════════//
//
//                              FREZZ BOT BY ASYRAF 6YOUU
//SCRIPT RECODE BY ASYRAF 6YOUU
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['6281946945315']
global.premium = ['6281946945315']
global.ownernomer = '6281946945315'
global.ownername = 'ASYRAF 6YOYU'
global.botname = 'FREZZ BOT'
global.footer = 'FREZZ BOT By ASYRAF 6YOUU'
global.ig = 'https://instagram/asyrafsixyouu'
global.region = 'Madura, Jawa Timur, Indonesia'
global.sc = 'https://wa.me/6281946945315'
global.myweb = 'https://youtube.com/channel/UCY6WNM6jZlmfWULcG69rNbQ'
global.packname = 'Sticker By'
global.author = 'FREZZ BOT'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '😎'
global.mess = {
    success: 'SUSCCES MENGHAMILKAN KAK ROS TOLOL✓',
    admin: 'LU BUKAN ADMIN TOLOL, LU CUMAN MEMBER KONTOL',
    botAdmin: 'Bot Bukan Admin Tolol Kontol',
    owner: 'Lu Cuman User Tolol,Lu Bukan Owner Gw Kontol',
    group: 'Khusus Di Group Bokep Tolol',
    private: 'Khusus Di Chat Pribadi Tolol Kontol',
    bot: 'Khusus Bot Tolol, Lu Cuman Manusia Bandar Bokep Kontol',
    wait: 'Sedang Mencoli Kak Ros....',
    error: 'Error Tolol'
    endLimit: 'Limit Lu Habis Kontol, Beli Ke Owner/Tunggu Sampe Di Coli Setiap 12 Jam  Kontol',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 10000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 5,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
