const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94740571407'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://isuruthejan20068:s@cluster0.d5czksv.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVFbjVtK2xycnlyc3pUdW4xVlgyM2RJdmxLNVpuSm1KU25iL0QyNGptYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDVqMjJRQXlUWmJZVTNDSHV1T21mRkVxbDJHbGxHWGNiSGEzaUhoUER5ST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRDZaelZxUW8wRzFGMDRXVEkyS3RkblpWdWFUeGlXM3NCZHVFSXVPOGxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUmEyK1NhcHNKdGhXZ3RxSWEwTXg5a3dEVjRkRUFycmZ5dHZVTzZPY0MwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtEK3pLaGRvV2pMK0t3ZTFGM2cwZStUczEyYXdTbUh5OW9nYk1qN2ZobEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdIbmtyV2FMK1IvaE82ekhMNzZkOENpeFhZQ2pscnBEcXpaNnBVeENWbG89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlejF5cnZjb1d2c09xWnBHWGRaYmJJMFBIbzh1MU9SZDlxaXBIK2MyZFJjeDJ0MDNhaXlFa0Uvc0hKVnJWLzJkY2Jhc2JjdmIza3phZ1JkS3lBYUVnZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIzMSwiYWR2U2VjcmV0S2V5IjoicENSOGpRUkVWdGVhSkluVWVxRE0rTDBDWmkrc2N3UHd5cndQRm1nOHFEOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZDJDOS1sNlZUTEdiQldFdW8xNGNZdyIsInBob25lSWQiOiI1ZWZiN2ZkOC1lYzBiLTQwNWMtYWQ1YS0wMjYyNDA0Yjk2YjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWRXSEVzT2xDZEI2QVRMdFRWcXhXczlmOTEwPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2N21GcFhLMkplKzZValFDRGhENlpsTFI3blE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcm9oUE1FRU5HUXZxd0dHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3SjQ0Qk1aNHdORmd4YjBBSktCcDl3c0xDY0RpYTBoc3ZmanlXeGxWa0djPSIsImFjY291bnRTaWduYXR1cmUiOiJqYlhWTUN5MWlaVVhrZFBQdTkwOEV0VTdKZ1FFY0FTZE9iK0RCdWlNb3VXd2lkR25uc21IcHJqMTNnUTRwR1NvWVYweXNOVi81NHV4SWN2OFh6YytBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiKytZT0F3L2hEb2dxQVI5dWIvOHFrZ0VzL3JSZjdPcWdCVHBiWVFJQnRZS1VXL2ZPcHBENXQzMGk4cTdoZnJWTjdQYjZROHhoQjB6bFlrU2pHYnp3aHc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzQwNTcxNDA3OjQ5QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQwNTcxNDA3OjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNDZU9BVEdlTURSWU1XOUFDU2dhZmNMQ3duQTRtdEliTDM0OGxzWlZaQm4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDM5MDUzNjl9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '𝙼𝚁 Isuru',
  packname:  process.env.PACK_NAME || 'MADE BY 𝙼𝚁 Isuru',
  
  botname:   process.env.BOT_NAME === undefined ? "𝙼𝚁 Isuru" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝙼𝚁 Isuru' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'i am alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙼𝚁 Isuru•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| '𝙼𝚁 Isuru',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
