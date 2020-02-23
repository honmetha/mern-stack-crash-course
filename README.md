# Frontend Assignment

โจทย์สำหรับผู้สมัครตำแหน่ง Frontend มีทั้งหมด 2 part ขอให้ทำทั้ง 2 part ให้เรียบร้อย
การทำโจทย์ให้คำนึงถึงกฎ 3 ข้อใน (อยู่หัวข้อด้านล่าง) ตลอดเวลาด้วย เพราะเราเชื่อว่าการเขียน code ไม่ใช่แค่เขียนแค่ทำงานได้ตามโจทย์เพียงอย่างเดียว

โดยปกติแล้วโจทย์จะใช้เวลาทำประมาณ 2-3 ชั่วโมงจึงจะเสร็จเรียบร้อย ดังนั้นลองประเมินเวลาของตัวเอง ควรจะมีเวลาทำต่อเนื่อง 2-3 ชั่วโมง
อย่างไรก็ตาม เราให้เวลาทำโจทย์นี้ถึง 7 วันเนื่องจากบางครั้งเราไม่ว่างวันธรรมดา ต้องรอวันเสาร์อาทิตย์

## Environment

Node.js: 12 (LTS/ERBIUM)

Chrome: 78+

## Task

เราต้องการสร้าง Web Application (ด้วย ReactJS) ที่ใช้ส่ง email จำนวนมากให้แก่ user (Mass Email Marketing)
ทีมได้เตรียมไฟล์ emails.csv ซึ่งมีข้อมูล email ของ user อยู่ และอีกไฟล์หนึ่งคือ ranks.csv ซึ่งเก็บข้อมูลระดับขั้นของ user โดยทั้ง 2 file อยู่ใน directory `data`

ทีม UX/UI ยังได้เตรียม design version prototype ไว้ให้อีกด้วย สามารถกดดูจาก link figma ด้านล่างได้เลย

[Link to Web Design](https://www.figma.com/file/zXhXIxKqiHlqzaVS50mWCb/Frontend-Assignment?node-id=0%3A1)

โจทย์จะแบ่งออกเป็น 2 part ใหญ่ๆ ขอให้ทำ part 1 ให้เสร็จก่อน ดูรายละเอียดได้ในแต่ละ part

เราอนุญาตให้ผู้สมัครแก้ไข source code ใน project นี้อย่างไรก็ได้และจะแก้ไขไฟล์ไหนก็ได้ เพื่อให้ทำโจทย์ทั้ง 2 ข้อออกมาได้ถูกต้องและคำนึงถึงกฎ 3 ข้อที่เราได้ระบุไว้

### Part 1 - Preview Email Content
ใน part แรกของโจทย์ ให้ผู้สมัครแก้ไข Web Application เพื่อให้สามารถอ่านไฟล์ emails.csv และ ranks.csv จากนั้น generate list ของ email พร้อม body ที่จะส่งไปให้ user

ลำดับขั้นตอนการทำงานควรจะเป็นตามนี้
1. เลือกไฟล์ emails.csv
2. เลือกไฟล์ ranks.csv
3. Web Application แสดง list ของ email และ body ที่จะส่งเป็นตารางตาม design โดยมีสถานะเป็น "รอส่ง"

### Part 2 - Sent Email to User
ใน part ที่ 2 จะทำต่อจาก part 1 โดยให้ Web Application ของเราส่งอีเมล์ออกไปจริงๆ โดยยิงผ่าน API ที่เรากำหนดไว้ให้แล้วตามหัวข้อ `Email web service`


Web Application ของเราจะเรียก API จริงๆ ก็ต่อเมื่อผู้ใช้กดปุ่ม "ส่งเมล์" แล้วเท่านั้น กระบวนการทำงานคร่าวๆ มีดังนี้

1. เมื่อกดส่ง email จะทำการยิงไปยัง web service  
   1.1 ในกรณีที่ request ที่ส่งไป web service ไม่สำเร็จ ให้แสดงสถานะ "ส่งล้มเหลว" ตาม design  
   1.2 ในกรณีที่ request ที่ส่งไป web service สำเร็จ ให้แสดงสถานะ "ส่งสำเร็จ" ตาม design  
   1.3 ในกรณีที่ request ที่ส่งไป web service ยังไม่เสร็จสิ้น ให้แสดงสถานะ "กำลังส่ง" ตาม design
2. เมื่อการส่ง email เสร็จสมบูรณ์ (ไม่มี email ที่อยู่ในสถานะกำลังส่ง)  
   2.1 แสดงปุ่ม "ลองส่งเมลล์ที่ส่งล้มเหลวอีกครั้ง" ถ้ามี email ที่ส่งล้มเหลว เมื่อกด จะพยายามส่งอีเมลล์ที่ล้มเหลวอีกครั้งหนึ่ง  
   2.2 แสดงปุ่ม "ปิด" ถ้า email ทั้งหมดส่งสำเร็จแล้ว เมื่อกด จะปิดหน้าเว็บ


### Email web service

**Endpoint**  
https://us-central1-frontend-assignment-d6597.cloudfunctions.net/sendMail

** Request **
- **Method:** POST
- **Headers:**
  - Content-Type: application/json
- **body:**
  - email: `string` - Email ที่จะส่งไปหา
  - subject: `string` - หัวข้อ Email
  - body: `string` เนื้อหา Email

โดย web service นี้มีความไม่แน่นอน

- ในกรณีที่ส่งข้อมูลไป **ถูกต้อง** และ web service เกิดข้อผิดพลาด จะคืน HTTP 500 กลับคืนมา
- ในกรณีที่ส่งข้อมูลไป **ถูกต้อง** และ web service ทำงานสำเร็จ จะคืน HTTP 204 กลับคืนมา
- ในกรณีที่ส่งข้อมูลไป **ไม่ถูกต้อง** web service จะคืน HTTP 400 กลับคืนมา

และในส่วนของ response จะคืน body ว่างเสมอ


## กฎ 3 ข้อในการทำโจทย์

### 1. WTF per minute

http://commadot.com/wtf-per-minute/

ถ้าเอา code ที่เราเขียนให้เพื่อนอ่านแล้วเพื่อนบอก WTF มากเท่าไร แสดงว่า code quality เราแย่เท่านั้น
ดั้งนั้นระหว่างเขียนขอให้นึกถึงว่า เราทำงานกับคนอีกหลายคน จะเขียนยังไงให้อ่านง่าย สื่อสิ่งที่จะทำได้ชัดเจน

> “Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. ...[Therefore,] making it easy to read makes it easier to write.” - Robert C. Martin

### 2. ถ้าโปรแกรมพังเราต้องรู้

โปรแกรมที่เราเขียนไปแล้ว เราต้องดูแลรักษามันอีกไปหลายเดือนหรืออาจหลายปี จะทำยังไงให้เรามั่นใจได้ว่าโปรแกรมที่เราเขียนไปทำงานถูกต้องอยู่เสมอ

จงเขียน test ให้เพียงพอ ที่ให้เรามั่นใจว่ามันทำงานถูกต้อง รวมถึงใช้เครื่องมือต่างๆ เพื่อช่วยตรวจสอบก่อนที่จะโปรแกรมจะพังบน production บางครั้งแค่ log error ให้ถูกต้องก็ช่วยได้มากแล้ว

### 3. ผู้ใช้ต้องแฮปปี้

ลองพัฒนา web application ให้ออกมาโดยมี user experience (UX) ที่ดี
แนะนำว่าให้ลองคิดว่าตัวเองเป็นคนใช้งาน แล้วทำออกมาให้ตัวเองใช้ได้โดยไม่หงุดหงิด
หรืออาจลองดู best practices ต่างๆและนำมาปรับใช้

## Project Structure

ข้อมูลเกี่ยวกับโปรเจกต์ที่ถูกสร้างไว้ สามารถดูได้ที่ [README-CRA.md](./README-CRA.md)
# frontend-assignment-master
