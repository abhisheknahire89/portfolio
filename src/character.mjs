// Original vector portrait, stylised from Abhishek's supplied reference photo.
// The hair group retains the existing scroll-animation pivot.
export function avatar(id='portrait',standalone=false){return `<svg class="builder-avatar" ${standalone?'width="800" height="1000" viewBox="60 0 520 650" role="img" aria-labelledby="portrait-title portrait-description"':'viewBox="0 0 640 650" aria-hidden="true"'} fill="none" xmlns="http://www.w3.org/2000/svg">${standalone?'<title id="portrait-title">Abhishek Nahire — illustrated portrait</title><desc id="portrait-description">A welcoming, waving portrait with warm brown skin, textured upward-styled dark hair, expressive brown eyes, a distinctive dark mustache and a slate-blue collared shirt.</desc>':''}<defs><pattern id="shirt-${id}" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M0 22L22 0" stroke="#d0dbe1" stroke-opacity=".025" stroke-width="1"/></pattern></defs>
<!-- Tailored slate shirt, with muted burgundy shoulder accents. -->
<path d="M111 650C116 494 207 466 265 453H376C462 472 523 536 540 650" fill="#2c3e50" stroke="#151b2b" stroke-width="4"/>
<path d="M111 650C116 494 207 466 265 453H376C462 472 523 536 540 650" fill="url(#shirt-${id})"/>
<path d="M381 461Q461 484 492 539L477 548Q449 499 374 478Z" fill="#86525e"/>
<path d="M280 434V470C280 506 358 506 358 470V434" fill="#b57d56" stroke="#151b2b" stroke-width="4"/>
<path d="M286 455Q321 478 351 453V471Q322 487 286 472Z" fill="#9d684a" opacity=".35"/>
<!-- Ears and softly squared face. -->
<path d="M222 309C180 296 182 360 220 363M418 309C460 296 456 360 421 363" fill="#c99167" stroke="#151b2b" stroke-width="4"/>
<path d="M207 320Q195 326 207 345M432 320Q444 326 432 345" stroke="#a36b4b" stroke-width="3" stroke-linecap="round"/>
<path d="M217 254H424V372C424 412 409 438 375 450Q350 462 323 463Q288 462 262 448C232 434 217 410 217 373Z" fill="#c99167" stroke="#151b2b" stroke-width="4"/>
<path d="M220 287V374Q220 421 266 446Q237 414 238 374V286Z" fill="#ad754f" opacity=".27"/>
<path d="M407 295V371Q407 411 377 440Q419 420 421 371V286Z" fill="#a86f4e" opacity=".18"/>
<path d="M248 283Q268 270 288 280" stroke="#dfaf85" stroke-width="6" stroke-linecap="round" opacity=".35"/>
<!-- The opening seam sits behind the animated hair. -->
<ellipse cx="320" cy="256" rx="103" ry="25" fill="#232638" stroke="#151b2b" stroke-width="4"/>
<ellipse cx="320" cy="256" rx="73" ry="13" stroke="#5c6076" stroke-width="2"/>
<path d="M218 259L231 268L228 303L219 296ZM422 260L408 267L413 303L422 294Z" fill="#1a1a2e"/>
<g class="head-lid"><path d="M215 254L212 213Q209 184 227 167Q224 158 224 153Q236 158 246 157Q249 144 257 138L272 146Q280 134 294 128Q300 139 309 142Q323 132 335 132L350 146Q363 141 375 143L382 157Q417 159 428 193Q434 215 424 254L408 244L393 248L377 237L355 245L335 234L315 243L297 235L276 246L258 240L239 250L226 244Z" fill="#1a1a2e" stroke="#151b2b" stroke-width="4" stroke-linejoin="round"/>
<path d="M237 195Q245 175 266 171M276 171L295 158M307 166L330 160M347 174Q369 167 388 183" stroke="#3d3d5c" stroke-width="4" stroke-linecap="round"/>
<path d="M242 215Q265 196 285 201M320 193Q345 184 365 196" stroke="#303049" stroke-width="3" stroke-linecap="round"/></g>
<!-- Brows and almond-shaped eyes. No glasses, matching the reference. -->
<path d="M241 296Q265 283 290 294M345 294Q370 283 394 297" stroke="#252334" stroke-width="6" stroke-linecap="round"/>
<g class="avatar-eyes"><path d="M242 320Q264 302 290 318Q272 338 247 327Z" fill="#f4eee2" stroke="#252334" stroke-width="3" stroke-linejoin="round"/>
<path d="M346 318Q372 302 394 320L389 327Q365 338 346 318Z" fill="#f4eee2" stroke="#252334" stroke-width="3" stroke-linejoin="round"/>
<circle cx="268" cy="320" r="10" fill="#6b4423"/><circle cx="370" cy="320" r="10" fill="#6b4423"/>
<circle cx="268" cy="321" r="5.5" fill="#1a1a2e"/><circle cx="370" cy="321" r="5.5" fill="#1a1a2e"/>
<circle cx="271" cy="316" r="3" fill="#fff"/><circle cx="373" cy="316" r="3" fill="#fff"/></g>
<path d="M315 333C314 344 307 352 307 358Q320 367 334 358" stroke="#986445" stroke-width="3" stroke-linecap="round"/>
<path d="M322 340L325 351" stroke="#e2b58b" stroke-width="4" stroke-linecap="round" opacity=".6"/>
<!-- Distinctive groomed mustache, kept separate from the smile. -->
<path d="M319 376C306 371 293 376 287 387L281 398Q298 404 319 390Q321 383 319 376Z" fill="#1a1a2e" stroke="#151b2b" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M322 376C336 372 347 376 353 387L359 398Q341 405 321 390Q320 383 322 376Z" fill="#1a1a2e" stroke="#151b2b" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M291 390Q302 381 313 381M329 381Q341 382 349 391" stroke="#414052" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>
<path d="M297 408Q320 419 345 407Q335 433 320 432Q305 430 297 408Z" fill="#352938"/>
<path d="M307 414Q321 419 335 413" stroke="#f8eddd" stroke-width="4" stroke-linecap="round"/>
<path d="M306 445Q320 451 335 444" stroke="#956748" stroke-width="4" stroke-linecap="round" opacity=".45"/>
<!-- Open collar, small buttons and a discreet brand stitch. -->
<path d="M279 463L318 492L296 517L266 475ZM359 463L321 492L343 517L374 475Z" fill="#3d5065" stroke="#1c2a3b" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M321 495V647" stroke="#57697a" stroke-width="2" opacity=".55"/>
<circle cx="329" cy="532" r="2.5" fill="#a8b9c3"/><circle cx="329" cy="579" r="2.5" fill="#a8b9c3"/>
<path d="M406 573V563H418" stroke="#b5c69e" stroke-width="3" stroke-linecap="round"/>
<!-- Familiar welcoming wave, now matching the portrait skin tone. -->
<path d="M177 570C133 555 112 500 108 466L91 394C85 369 98 358 111 378L129 410L113 348C109 330 125 323 133 341L152 392L144 330C142 310 161 309 165 329L176 386L182 344C185 328 202 333 199 351L194 422L212 405C225 393 239 411 228 424L196 471C202 513 215 537 228 551" fill="#c99167" stroke="#151b2b" stroke-width="4" stroke-linejoin="round"/>
<path d="M155 433Q173 418 188 433M155 449Q170 442 182 450" stroke="#a77450" stroke-width="2.5" stroke-linecap="round"/>
<path d="M132 492Q169 509 202 492L232 553Q214 593 177 578C155 563 140 535 132 492Z" fill="#2c3e50" stroke="#151b2b" stroke-width="4"/>
<path d="M139 512Q169 526 207 510" stroke="#86525e" stroke-width="9"/>
<path d="M489 499L509 480M502 514L530 508M482 482L490 457" stroke="#f4ecd9" stroke-width="3" stroke-linecap="round"/></svg>`;}
