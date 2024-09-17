var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bef5e14c-9adc-4202-b2de-fd87910d90b9","e7095425-5f64-486b-b19e-c4bd593746d8","ac147917-83d4-465e-a835-1f3ea22c096c","ed1d3d4e-03ca-4578-a08e-f1eb10f9b83a","007b55b8-06fe-44d9-b595-fa6391d5dbeb","8e419104-0fd3-4f9d-b395-af908d4bc17a","85dca0ca-b403-44ea-b40b-7e92121b6564","042e12cd-47b4-42dc-a6db-3d8ffbc56ce0","cc8cc170-c865-41de-a2ab-8fbcb9e60745","c0452279-35c1-4637-a9b9-93d4860a5b99","ea7ad1a6-426b-47ae-bf2d-21e815d0c323","c1b3e3bc-c79e-4eb2-b23c-a5d5a0aa90bb","205d2a76-5b1a-48b6-b9d5-45a830a37450","70bd5129-472a-4c29-8590-26a54f6a82e5","368f4230-970f-4471-83d8-9253d8037f89","c8b06155-ec84-4b8c-a4ef-5fd8ae7f163e","c244a39d-7976-4cbb-b848-800e8465a3b2","c85fa7af-3432-4459-99fb-1082eacf3fcf","03b84e6b-35d1-4079-93cf-f896545a0474","2feb94bd-eb6e-43a0-98c5-37240e22de6c","6721932e-4cc8-4e01-84ce-984a7339a59d","2253d5df-ddf4-4d35-a942-89d0ead643ea","e93a55be-0eae-4232-b983-8ad9c1c1cddd","ca94080c-5f9c-4158-ab23-e879c92fac33","c0666065-eb3f-46aa-8a3c-48f773d04dd9","e24711e7-ced0-4c42-b5b7-b662f3ea97f3","9709d790-aeac-4277-bd55-92d23461c8d0","ad08bc27-2710-49b2-9c28-1678fb27ca2e","4775a740-4b74-4078-be8e-1848e165029e","f0bc628d-8272-4791-be1b-d10ee49b764c","bfd110ac-80b1-4c52-b263-f01dd9d12464","d49a6282-83f1-4ece-9f76-413229ba7fd6","515b6b70-8909-4df9-9027-23e5ffce8242","4d3ae4a1-61cf-4b25-a3fc-bad5502355c5","85da861f-2ec4-4b01-b4e4-09371ec3fb77","0a7d5536-7174-413f-a63e-72b70e6fa934","be2671a7-86d0-44ba-9284-5487cf227bb4","b5babc75-6e54-4a92-9e44-37fe5643d611","e805925d-a35e-42da-842f-c5aba312ec1c","48d28ece-77f0-46be-89a6-7d0e0f51a640","b9bf2519-c291-4fa0-92ca-aa48a68ce458","a427cb72-45c4-456f-b29d-32a8562e6f13","0547fa4d-6b3b-4eff-b505-69a688a1f819","20c7d71f-cc07-4445-ac09-533f62193936","2a113b41-3b48-4845-bb27-5e0b93a9916b","7b49f66e-d831-4739-8955-ab47878892de","813bb639-51c4-447d-af12-a05b10a6db41","2ad8b2bd-34a0-450f-bee9-85cfea8b034f","852b9b62-4738-4831-ad27-8904e43320f0","cf7db000-847e-4491-9e29-999d84796a66","1c986de3-de02-4247-a989-9896810e9c31","aa1dfada-c7c5-4d08-af76-607f930d4e71","09103a5c-4288-4269-8e64-d5e6845a930b","11effb32-88f5-4329-ab44-fbdfee43be14","a3f52b4b-a24e-49e7-8cc3-c09edd495d48","3021d406-2613-4a41-8fb0-3a7285188879","7b840cac-2cdd-4890-b0af-29074ac8c85d","3cedf5f9-7cc6-417c-9025-34de75dfaa6e","166aa217-1d76-4df6-beda-94bb431ee090","bbc96f8d-2f1b-4648-b9f5-f5ca27953cdc","1ae886ef-b5c2-4652-8ba0-14c0c97012af","8cc2cd0d-93b9-43dd-8609-a2cbbfa3f6e1","07c5c155-747d-42e1-8579-ba1ae4b0b9bf"],"propsByKey":{"bef5e14c-9adc-4202-b2de-fd87910d90b9":{"name":"rpgcharacter_02_1","sourceUrl":null,"frameSize":{"x":204,"y":248},"frameCount":1,"looping":true,"frameDelay":12,"version":"_36o9EVsr_MAaKBVmAdwO0tH3AgrvqIJ","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":248},"rootRelativePath":"assets/bef5e14c-9adc-4202-b2de-fd87910d90b9.png"},"e7095425-5f64-486b-b19e-c4bd593746d8":{"name":"rpgcharacter_05_1","sourceUrl":null,"frameSize":{"x":214,"y":209},"frameCount":1,"looping":true,"frameDelay":12,"version":"cZMC8y4BlHGaxEvV7Jo16_pM7cc0MaXR","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":209},"rootRelativePath":"assets/e7095425-5f64-486b-b19e-c4bd593746d8.png"},"ac147917-83d4-465e-a835-1f3ea22c096c":{"name":"retro_powerup_coin_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"NLtwV2Syoag9LPwdF8r91wCF6jRKYq07","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png"},"ed1d3d4e-03ca-4578-a08e-f1eb10f9b83a":{"name":"ninja walking.png_1","sourceUrl":null,"frameSize":{"x":280,"y":260},"frameCount":3,"looping":true,"frameDelay":2,"version":"UPWnITOicxmKFewiqkUObX2xTnL46KNc","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":520},"rootRelativePath":"assets/ed1d3d4e-03ca-4578-a08e-f1eb10f9b83a.png"},"007b55b8-06fe-44d9-b595-fa6391d5dbeb":{"name":"green ninja walking.png_1","sourceUrl":null,"frameSize":{"x":280,"y":260},"frameCount":3,"looping":true,"frameDelay":2,"version":"mvlPE3_F6r3ErYEUYlIvLUrTnV3bsXw4","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":520},"rootRelativePath":"assets/007b55b8-06fe-44d9-b595-fa6391d5dbeb.png"},"8e419104-0fd3-4f9d-b395-af908d4bc17a":{"name":"earth ninja walking.png_1","sourceUrl":null,"frameSize":{"x":280,"y":260},"frameCount":3,"looping":true,"frameDelay":2,"version":"4_8fICq0G7BMPTIO8hrjpDebuJY0ZxZR","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":520},"rootRelativePath":"assets/8e419104-0fd3-4f9d-b395-af908d4bc17a.png"},"85dca0ca-b403-44ea-b40b-7e92121b6564":{"name":"yellow ninja walking.png_1","sourceUrl":null,"frameSize":{"x":280,"y":260},"frameCount":3,"looping":true,"frameDelay":2,"version":"7C.bgGt5Z_hFUvSXkpXFNkNV5U5SkOBX","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":520},"rootRelativePath":"assets/85dca0ca-b403-44ea-b40b-7e92121b6564.png"},"042e12cd-47b4-42dc-a6db-3d8ffbc56ce0":{"name":"electric ninja walking.png_1","sourceUrl":null,"frameSize":{"x":280,"y":260},"frameCount":3,"looping":true,"frameDelay":2,"version":"oioHzWaf0CDPVigXaKaJqAKQNj2pnTfL","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":520},"rootRelativePath":"assets/042e12cd-47b4-42dc-a6db-3d8ffbc56ce0.png"},"cc8cc170-c865-41de-a2ab-8fbcb9e60745":{"name":"red ninja walking.png_1_copy_1","sourceUrl":null,"frameSize":{"x":280,"y":260},"frameCount":3,"looping":true,"frameDelay":2,"version":"qqCCu2fB7t9BidbNzc8.dGWrKErTpj4v","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":520},"rootRelativePath":"assets/cc8cc170-c865-41de-a2ab-8fbcb9e60745.png"},"c0452279-35c1-4637-a9b9-93d4860a5b99":{"name":"fire ninja walking","sourceUrl":null,"frameSize":{"x":280,"y":260},"frameCount":3,"looping":true,"frameDelay":3,"version":"AX_UjLecrZ2TPgda9u4H2be6LRF3Dlvt","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":520},"rootRelativePath":"assets/c0452279-35c1-4637-a9b9-93d4860a5b99.png"},"ea7ad1a6-426b-47ae-bf2d-21e815d0c323":{"name":"air ninja walking.png_1_copy_1","sourceUrl":null,"frameSize":{"x":280,"y":260},"frameCount":3,"looping":true,"frameDelay":3,"version":"1ZHDMJI90aGGGiKETlzK5YJRGYO7IGd4","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":520},"rootRelativePath":"assets/ea7ad1a6-426b-47ae-bf2d-21e815d0c323.png"},"c1b3e3bc-c79e-4eb2-b23c-a5d5a0aa90bb":{"name":"basic_attack.png_1","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":3,"looping":true,"frameDelay":2,"version":"2eFEWGcVHuQeNSsWXYLiLp5jsIdxdjnS","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":560},"rootRelativePath":"assets/c1b3e3bc-c79e-4eb2-b23c-a5d5a0aa90bb.png"},"205d2a76-5b1a-48b6-b9d5-45a830a37450":{"name":"green basic_attack.png_1","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":3,"looping":true,"frameDelay":2,"version":"9JZ.dIEVeLPD1KPCv1aA_LGMmk.9_bVc","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":560},"rootRelativePath":"assets/205d2a76-5b1a-48b6-b9d5-45a830a37450.png"},"70bd5129-472a-4c29-8590-26a54f6a82e5":{"name":"boulder blast","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":3,"version":"YiG7HYW.N1uHsui2Im2Km6mR2kqV9PY1","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/70bd5129-472a-4c29-8590-26a54f6a82e5.png"},"368f4230-970f-4471-83d8-9253d8037f89":{"name":"yellow basic_attack.png_1","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":3,"looping":true,"frameDelay":2,"version":"6RwdkGsVozIQ.1bk9usmywlSzjdjmFON","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":560},"rootRelativePath":"assets/368f4230-970f-4471-83d8-9253d8037f89.png"},"c8b06155-ec84-4b8c-a4ef-5fd8ae7f163e":{"name":"electroball.png","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":3,"looping":true,"frameDelay":2,"version":"gEjlLA538sjztLnMWIWMjE4zgb154Vm_","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":560},"rootRelativePath":"assets/c8b06155-ec84-4b8c-a4ef-5fd8ae7f163e.png"},"c244a39d-7976-4cbb-b848-800e8465a3b2":{"name":"red basic_attack.png_1_copy_1","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":3,"looping":true,"frameDelay":2,"version":"mc0A5ev9IWLUl879GE02mQaySQh4_Ctj","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":560},"rootRelativePath":"assets/c244a39d-7976-4cbb-b848-800e8465a3b2.png"},"c85fa7af-3432-4459-99fb-1082eacf3fcf":{"name":"fireballjutsu.png","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":3,"looping":true,"frameDelay":3,"version":"2YAtWlgooU32i1AXAwcav1sQsBtJsmz5","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":560},"rootRelativePath":"assets/c85fa7af-3432-4459-99fb-1082eacf3fcf.png"},"03b84e6b-35d1-4079-93cf-f896545a0474":{"name":"air_bullet.png_1_copy_1","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":3,"version":"HiVXrviMOXcHjTkzcjRPEHJdeNlOwW1l","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/03b84e6b-35d1-4079-93cf-f896545a0474.png"},"2feb94bd-eb6e-43a0-98c5-37240e22de6c":{"name":"spiral beam","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":2,"version":"Pp342u6E2eVTwwTFIJ2Cij_3Ec9dpQyo","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/2feb94bd-eb6e-43a0-98c5-37240e22de6c.png"},"6721932e-4cc8-4e01-84ce-984a7339a59d":{"name":"green beam","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":2,"version":"3O9WDHPOPi7vGVeMVfoZfA36_e96Pk5_","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/6721932e-4cc8-4e01-84ce-984a7339a59d.png"},"2253d5df-ddf4-4d35-a942-89d0ead643ea":{"name":"earth control","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":2,"version":"wpQcbjZI4vlQ1vzkChWynLDqHn0tKTFO","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/2253d5df-ddf4-4d35-a942-89d0ead643ea.png"},"e93a55be-0eae-4232-b983-8ad9c1c1cddd":{"name":"yellow beam.png_1","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":2,"version":"eLvr9w6cFFaFH7e5qcyEBGL4Jkfg6prr","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/e93a55be-0eae-4232-b983-8ad9c1c1cddd.png"},"ca94080c-5f9c-4158-ab23-e879c92fac33":{"name":"electro stream.png_1","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":2,"version":"TXlMrFaQU2ofv5obkYviesir.RPfeh9.","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/ca94080c-5f9c-4158-ab23-e879c92fac33.png"},"c0666065-eb3f-46aa-8a3c-48f773d04dd9":{"name":"red beam","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":2,"version":"10D5tlEle9G5Ks3XJX7on5nQKlXN806w","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/c0666065-eb3f-46aa-8a3c-48f773d04dd9.png"},"e24711e7-ced0-4c42-b5b7-b662f3ea97f3":{"name":"dragon flame.png","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":2,"version":"7H9_fkKnUkkusVa4J6TM9m0mIg206CrS","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/e24711e7-ced0-4c42-b5b7-b662f3ea97f3.png"},"9709d790-aeac-4277-bd55-92d23461c8d0":{"name":"air_vortex.png_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":350,"y":280},"frameCount":2,"looping":true,"frameDelay":2,"version":"MgSWW7ganjI0zP8qVhPG.EX7j_Ifjz7y","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":560},"rootRelativePath":"assets/9709d790-aeac-4277-bd55-92d23461c8d0.png"},"ad08bc27-2710-49b2-9c28-1678fb27ca2e":{"name":"ninja idle.png_1","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":4,"looping":true,"frameDelay":4,"version":"zQ6YLbMg_4aFuod1ryWXWyzIekFaExQf","loadedFromSource":true,"saved":true,"sourceSize":{"x":580,"y":560},"rootRelativePath":"assets/ad08bc27-2710-49b2-9c28-1678fb27ca2e.png"},"4775a740-4b74-4078-be8e-1848e165029e":{"name":"green ninja idle.png_1","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":2,"looping":true,"frameDelay":4,"version":"6Rv0jrWOu27yCAs6WVb5zyM1o5HbeiGj","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":560},"rootRelativePath":"assets/4775a740-4b74-4078-be8e-1848e165029e.png"},"f0bc628d-8272-4791-be1b-d10ee49b764c":{"name":"earth ninja idle.png_1","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":2,"looping":true,"frameDelay":4,"version":"SIH.UITLV0uV5NX90vpGP7Gg8FJDUUia","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":560},"rootRelativePath":"assets/f0bc628d-8272-4791-be1b-d10ee49b764c.png"},"bfd110ac-80b1-4c52-b263-f01dd9d12464":{"name":"yellow ninja idle.png_1","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":4,"looping":true,"frameDelay":4,"version":"N_KBEeTxY3jN3BGmVSqhwccIBZ8IvZPG","loadedFromSource":true,"saved":true,"sourceSize":{"x":580,"y":560},"rootRelativePath":"assets/bfd110ac-80b1-4c52-b263-f01dd9d12464.png"},"d49a6282-83f1-4ece-9f76-413229ba7fd6":{"name":"electric ninja idle.png","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":2,"looping":true,"frameDelay":4,"version":"BlIUgVwoljD9gMH18IZtmz9.u5Nebetz","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":560},"rootRelativePath":"assets/d49a6282-83f1-4ece-9f76-413229ba7fd6.png"},"515b6b70-8909-4df9-9027-23e5ffce8242":{"name":"red ninja idle.png_1_copy_1","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":4,"looping":true,"frameDelay":4,"version":"FvJNu8wgkWU5NieO6RtJedM7IOhYAUnu","loadedFromSource":true,"saved":true,"sourceSize":{"x":580,"y":560},"rootRelativePath":"assets/515b6b70-8909-4df9-9027-23e5ffce8242.png"},"4d3ae4a1-61cf-4b25-a3fc-bad5502355c5":{"name":"fire ninja idle","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":2,"looping":true,"frameDelay":4,"version":"vCyUGg9woPl1_P3eapN368ovdXYBtuJ7","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":560},"rootRelativePath":"assets/4d3ae4a1-61cf-4b25-a3fc-bad5502355c5.png"},"85da861f-2ec4-4b01-b4e4-09371ec3fb77":{"name":"air_ninja_idle.png_1_copy_1","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":2,"looping":true,"frameDelay":4,"version":"SOIa2zTFgP0JsdeqFXWSuj8SVGaAMPXx","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":560},"rootRelativePath":"assets/85da861f-2ec4-4b01-b4e4-09371ec3fb77.png"},"0a7d5536-7174-413f-a63e-72b70e6fa934":{"name":"ultimate_attack2_pose","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":4,"looping":true,"frameDelay":4,"version":"qzStAI1Ft_BscTnppB2y0d.nvLGz5Whd","loadedFromSource":true,"saved":true,"sourceSize":{"x":580,"y":560},"rootRelativePath":"assets/0a7d5536-7174-413f-a63e-72b70e6fa934.png"},"be2671a7-86d0-44ba-9284-5487cf227bb4":{"name":"green_ultimate_attack2_pose","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":2,"looping":true,"frameDelay":4,"version":"KoDFN7efoYMQJ9m_iRJUbIxVLs.hLgCJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":560},"rootRelativePath":"assets/be2671a7-86d0-44ba-9284-5487cf227bb4.png"},"b5babc75-6e54-4a92-9e44-37fe5643d611":{"name":"yellow ultimate_attack2_pose","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":2,"looping":true,"frameDelay":4,"version":"tTuYHqA7bNpLFrScClC2.E3OYRbhkjsQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":560},"rootRelativePath":"assets/b5babc75-6e54-4a92-9e44-37fe5643d611.png"},"e805925d-a35e-42da-842f-c5aba312ec1c":{"name":"red ultimate_attack2_pose_copy_1","sourceUrl":null,"frameSize":{"x":290,"y":280},"frameCount":4,"looping":true,"frameDelay":3,"version":"RpSRYbMW6MqoIzrdW1ymcRP8l5whMzt5","loadedFromSource":true,"saved":true,"sourceSize":{"x":580,"y":560},"rootRelativePath":"assets/e805925d-a35e-42da-842f-c5aba312ec1c.png"},"48d28ece-77f0-46be-89a6-7d0e0f51a640":{"name":"air bullet","sourceUrl":null,"frameSize":{"x":170,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"NohhJwVNu2j8qTHHqP2B4zC_.aXJGxFw","loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":200},"rootRelativePath":"assets/48d28ece-77f0-46be-89a6-7d0e0f51a640.png"},"b9bf2519-c291-4fa0-92ca-aa48a68ce458":{"name":"attack 1.png_1","sourceUrl":null,"frameSize":{"x":170,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"KkWlDp626HJ0ZR1l62vR9uyMIP7S9JRv","loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":200},"rootRelativePath":"assets/b9bf2519-c291-4fa0-92ca-aa48a68ce458.png"},"a427cb72-45c4-456f-b29d-32a8562e6f13":{"name":"PikPng.com_laser-beam-png_447813.png_1","sourceUrl":null,"frameSize":{"x":1481,"y":351},"frameCount":1,"looping":true,"frameDelay":12,"version":"9L_23KQgJmAralRofjnV54U4l0_8mB4I","loadedFromSource":true,"saved":true,"sourceSize":{"x":1481,"y":351},"rootRelativePath":"assets/a427cb72-45c4-456f-b29d-32a8562e6f13.png"},"0547fa4d-6b3b-4eff-b505-69a688a1f819":{"name":"ultimateAttack2","sourceUrl":null,"frameSize":{"x":1481,"y":351},"frameCount":1,"looping":true,"frameDelay":12,"version":"pldpC4NGluoXJvwNLJv6OHmSZVfGxOMn","loadedFromSource":true,"saved":true,"sourceSize":{"x":1481,"y":351},"rootRelativePath":"assets/0547fa4d-6b3b-4eff-b505-69a688a1f819.png"},"20c7d71f-cc07-4445-ac09-533f62193936":{"name":"burst06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NoHMXwdmldY9LZVfh3RpxscchdU5henz/category_video_games/burst06.png","frameSize":{"x":396,"y":354},"frameCount":1,"looping":true,"frameDelay":2,"version":"NoHMXwdmldY9LZVfh3RpxscchdU5henz","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":354},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NoHMXwdmldY9LZVfh3RpxscchdU5henz/category_video_games/burst06.png"},"2a113b41-3b48-4845-bb27-5e0b93a9916b":{"name":"retro_powerup_heart_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF/category_retro/retro_powerup_heart.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF/category_retro/retro_powerup_heart.png"},"7b49f66e-d831-4739-8955-ab47878892de":{"name":"explosion.png_1","sourceUrl":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/7b49f66e-d831-4739-8955-ab47878892de.png","frameSize":{"x":772,"y":652},"frameCount":1,"looping":true,"frameDelay":4,"version":".Dz95y7N4RdN3Vsj8PLnQt__DMH9VTN8","loadedFromSource":true,"saved":true,"sourceSize":{"x":772,"y":652},"rootRelativePath":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/7b49f66e-d831-4739-8955-ab47878892de.png"},"813bb639-51c4-447d-af12-a05b10a6db41":{"name":"electro blast","sourceUrl":null,"frameSize":{"x":772,"y":652},"frameCount":1,"looping":true,"frameDelay":12,"version":"fiz_bNJ.oLDunmLlUd9sbfsX2_b1nfVN","loadedFromSource":true,"saved":true,"sourceSize":{"x":772,"y":652},"rootRelativePath":"assets/813bb639-51c4-447d-af12-a05b10a6db41.png"},"2ad8b2bd-34a0-450f-bee9-85cfea8b034f":{"name":"samurai_boss.png","sourceUrl":null,"frameSize":{"x":469,"y":512},"frameCount":6,"looping":true,"frameDelay":2,"version":"SjiTaAihaA7TH.52aKlozD_ypxWRJHGu","loadedFromSource":true,"saved":true,"sourceSize":{"x":1407,"y":1024},"rootRelativePath":"assets/2ad8b2bd-34a0-450f-bee9-85cfea8b034f.png"},"852b9b62-4738-4831-ad27-8904e43320f0":{"name":"katana_blade.png_1","sourceUrl":null,"frameSize":{"x":360,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"b1HR0bT83LAA_RB3HBGqKn4jX54fmvQw","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":500},"rootRelativePath":"assets/852b9b62-4738-4831-ad27-8904e43320f0.png"},"cf7db000-847e-4491-9e29-999d84796a66":{"name":"pngkey.com-ninja-star-png-1119555.png_1","sourceUrl":null,"frameSize":{"x":482,"y":482},"frameCount":1,"looping":true,"frameDelay":12,"version":"C_PaCXZtV.Zq9PuqIS2WHxWbRH3CgsEK","loadedFromSource":true,"saved":true,"sourceSize":{"x":482,"y":482},"rootRelativePath":"assets/cf7db000-847e-4491-9e29-999d84796a66.png"},"1c986de3-de02-4247-a989-9896810e9c31":{"name":"help.png","sourceUrl":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/1c986de3-de02-4247-a989-9896810e9c31.png","frameSize":{"x":320,"y":251},"frameCount":1,"looping":true,"frameDelay":4,"version":"pbMidQKIr3549uYWjTX5T9RVMo94GCMM","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":251},"rootRelativePath":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/1c986de3-de02-4247-a989-9896810e9c31.png"},"aa1dfada-c7c5-4d08-af76-607f930d4e71":{"name":"spiral ball","sourceUrl":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/aa1dfada-c7c5-4d08-af76-607f930d4e71.png","frameSize":{"x":901,"y":805},"frameCount":1,"looping":true,"frameDelay":4,"version":"JnOmAWCi9QjeFW0yn5SZgRnN5zXL7UBs","loadedFromSource":true,"saved":true,"sourceSize":{"x":901,"y":805},"rootRelativePath":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/aa1dfada-c7c5-4d08-af76-607f930d4e71.png"},"09103a5c-4288-4269-8e64-d5e6845a930b":{"name":"air vortex","sourceUrl":null,"frameSize":{"x":1184,"y":1184},"frameCount":1,"looping":true,"frameDelay":12,"version":"9XcQZQsUC026j2HIX2aXnSWCsyTfEy_g","loadedFromSource":true,"saved":true,"sourceSize":{"x":1184,"y":1184},"rootRelativePath":"assets/09103a5c-4288-4269-8e64-d5e6845a930b.png"},"11effb32-88f5-4329-ab44-fbdfee43be14":{"name":"fire ball.png_1","sourceUrl":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/11effb32-88f5-4329-ab44-fbdfee43be14.png","frameSize":{"x":320,"y":170},"frameCount":1,"looping":true,"frameDelay":4,"version":"dkLaYvR45sw2v4hfyDbYzcKcBMykX59p","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":170},"rootRelativePath":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/11effb32-88f5-4329-ab44-fbdfee43be14.png"},"a3f52b4b-a24e-49e7-8cc3-c09edd495d48":{"name":"Catastrophic Meteor","sourceUrl":null,"frameSize":{"x":320,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"ICd6nhBxEVC6YGaxZaiF4OfJ4egThVhq","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":170},"rootRelativePath":"assets/a3f52b4b-a24e-49e7-8cc3-c09edd495d48.png"},"3021d406-2613-4a41-8fb0-3a7285188879":{"name":"dragon bullet.png_1","sourceUrl":null,"frameSize":{"x":98,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"t_faEFoGIkFo73Sb6A4DxsEqu06rCdS3","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/3021d406-2613-4a41-8fb0-3a7285188879.png"},"7b840cac-2cdd-4890-b0af-29074ac8c85d":{"name":"KIRIN.png","sourceUrl":null,"frameSize":{"x":98,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"P_AcS.CRrrdFIAixOZJXatGKdVdcJ2Uc","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/7b840cac-2cdd-4890-b0af-29074ac8c85d.png"},"3cedf5f9-7cc6-417c-9025-34de75dfaa6e":{"name":"electroball.png_1","sourceUrl":null,"frameSize":{"x":330,"y":340},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y21DlXFrfBFqOAKyBw9OYUqWUS2H6hDp","loadedFromSource":true,"saved":true,"sourceSize":{"x":330,"y":340},"rootRelativePath":"assets/3cedf5f9-7cc6-417c-9025-34de75dfaa6e.png"},"166aa217-1d76-4df6-beda-94bb431ee090":{"name":"boulder.png_1","sourceUrl":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/166aa217-1d76-4df6-beda-94bb431ee090.png","frameSize":{"x":370,"y":290},"frameCount":1,"looping":true,"frameDelay":4,"version":"x1igpQxXUuswxnvQD1zAij9Op5zEhyOz","loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":290},"rootRelativePath":"assets/v3/animations/NpSsrTnw_0-f9MdgQ533DraF_vjA9F4zAUhYmFovC8w/166aa217-1d76-4df6-beda-94bb431ee090.png"},"bbc96f8d-2f1b-4648-b9f5-f5ca27953cdc":{"name":"earth spikes","sourceUrl":null,"frameSize":{"x":99,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"NdDBNu7_Z56FVR00cI._J0AhFWlyyY32","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":65},"rootRelativePath":"assets/bbc96f8d-2f1b-4648-b9f5-f5ca27953cdc.png"},"1ae886ef-b5c2-4652-8ba0-14c0c97012af":{"name":"earth wall.png_1","sourceUrl":null,"frameSize":{"x":31,"y":85},"frameCount":1,"looping":true,"frameDelay":12,"version":"Krs9M1VJc.kaGuEe248ESbXhKeXz2SW.","loadedFromSource":true,"saved":true,"sourceSize":{"x":31,"y":85},"rootRelativePath":"assets/1ae886ef-b5c2-4652-8ba0-14c0c97012af.png"},"8cc2cd0d-93b9-43dd-8609-a2cbbfa3f6e1":{"name":"hellraiser.png","sourceUrl":null,"frameSize":{"x":206,"y":237},"frameCount":1,"looping":true,"frameDelay":12,"version":"Z.BHg7zQ.EvVlRZDqTHnV3uKN2sBqp1o","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":237},"rootRelativePath":"assets/8cc2cd0d-93b9-43dd-8609-a2cbbfa3f6e1.png"},"07c5c155-747d-42e1-8579-ba1ae4b0b9bf":{"name":"dagger_1","sourceUrl":"assets/api/v1/animation-library/gamelab/eXlG3MLT4HNDEqxIodI3SvxDELS1Lfdi/category_video_games/dagger.png","frameSize":{"x":220,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"eXlG3MLT4HNDEqxIodI3SvxDELS1Lfdi","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eXlG3MLT4HNDEqxIodI3SvxDELS1Lfdi/category_video_games/dagger.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Soundtrack
playSound("assets/The-Ninja-Warriors-(Stage-1-Theme).mp3", true);

// Create your variables here
var gameover = false;
var game_start = false;
var character = false;
var health = 500;
var score = 0;
var energy = 800;
var damage1 = 200;
var damage2 = 200;
var kills = 0;
var time = 0;
var time2 = 0;
var boss_health = 5000;
var score2 = 0;
var time3 = 0;
var page = 1;
var blue = false;
var red = false;
var yellow = false;
var green = false;
var moves = 30;
var loops = 0;
var air_transform = false;
var fire_transform = false;
var electric_transform = false;
var earth_transform = false;
var rasengan = false;
var fire_attack = false;
var kirin = false;
var wall = false;
var wall_durability = 20;
var how_to_play = false;
var writings = 1;
var boss_levels = 1;
var paused_game = false;
var boss_health2 = 10000;
 // Create your sprites here
var player = createSprite(50, 300);
player.setAnimation("ninja idle.png_1");
player.scale = 0.2;
var enemy1 = createSprite(400, randomNumber(250,350));
enemy1.setAnimation("rpgcharacter_02_1");
enemy1.scale = 0.2;
enemy1.velocityX = -5;
var enemy2 = createSprite(400, randomNumber(250,350));
enemy2.setAnimation("rpgcharacter_05_1");
enemy2.scale = 0.2;
enemy2.velocityX = -5;
var boss = createSprite(328, 280);
boss.setAnimation("samurai_boss.png");
boss.scale = 0.35;
boss.visible = false;
var icon = createSprite(265, 75);
icon.setAnimation("pngkey.com-ninja-star-png-1119555.png_1");
icon.scale = 0.15;
icon.rotationSpeed = 5;
var coin = createSprite(-50, 0);
coin.setAnimation("retro_powerup_coin_1");
coin.scale = 0.1;
var basic_attack = createSprite(0, -50);
basic_attack.setAnimation("attack 1.png_1");
basic_attack.scale = 0.2;
basic_attack.velocityX = 15;
var ultimate_attack = createSprite(0, -50);
ultimate_attack.setAnimation("PikPng.com_laser-beam-png_447813.png_1");
ultimate_attack.scale = 0.10;
var heart = createSprite(-50, 0);
heart.setAnimation("retro_powerup_heart_1");
heart.scale = 0.1;
var ultimate_attack2 = createSprite(-50, -150);
ultimate_attack2.setAnimation("explosion.png_1");
ultimate_attack2.scale = 0.1;
var boss_attack1 = createSprite(1000, -400);
boss_attack1.setAnimation("katana_blade.png_1");
boss_attack1.scale = 0.08;
boss_attack1.velocityX = 0;
var boss_attack2 = createSprite(1000, -400);
boss_attack2.setAnimation("katana_blade.png_1");
boss_attack2.scale = 0.08;
boss_attack2.velocityX = 0;
var selection1 = createSprite(70, 146);
selection1.scale = 0.5;
selection1.visible = false;
var selection2 = createSprite(195, 149);
selection2.scale = 0.5;
selection2.visible = false;
var selection3 = createSprite(315, 155);
selection3.scale = 0.5;
selection3.visible = false;
var selection4 = createSprite(70, 265);
selection4.scale = 0.5;
selection4.visible = false;
var arrow1 = createSprite(20, 215);
arrow1.scale = 0.4;
arrow1.visible = false;
var arrow2 = createSprite(380, 215);
arrow2.scale = 0.4;
arrow2.visible = false;
var RASENGAN = createSprite(200, -400);
RASENGAN.setAnimation("spiral ball");
RASENGAN.scale = 0.2;
RASENGAN.setCollider("circle");
var meteor = createSprite(200, -400);
meteor.setAnimation("Catastrophic Meteor");
meteor.scale = 1.55;
meteor.width = 225;
meteor.rotation = 90;
var thunderDragon = createSprite(200, -400);
thunderDragon.setAnimation("KIRIN.png");
thunderDragon.height = 500;
thunderDragon.width = 40000;
thunderDragon.scale = 2.75;
var earth_wall = createSprite(200, -400);
earth_wall.setAnimation("earth wall.png_1");
earth_wall.scale = 2;
function draw() {
  backdrop();
  if (game_start) {
    if (character) {
      if (how_to_play || paused_game) {
        information();
        drawSprites();
        if (how_to_play) {
          tutorial_screen();
          enemy1.velocityX = 0;
          enemy2.velocityX = 0;
          basic_attack.velocityX = 0;
          basic_attack.velocityX = 0;
          if (score2 >= 500) {
            boss_attack1.velocityX = 0;
            boss_attack2.velocityX = 0;
          }
          if (air_transform) {
            if (rasengan) {
              RASENGAN.velocityX = 0;
              RASENGAN.velocityY = 0;
              player.velocityX = 0;
              player.velocityY = 0;
            }
          }
          if (fire_transform) {
            if (fire_attack) {
              meteor.velocityY = 0;
            }
          }
          if (electric_transform) {
            if (kirin) {
              thunderDragon.velocityX = 0;
              thunderDragon.velocityY = 0;
            }
          }
          if (keyWentDown("e")) {
            how_to_play = false;
            writings = 1;
            enemy1.velocityX = -5;
            enemy2.velocityX = -5;
            basic_attack.velocityX = 15;
            basic_attack.velocityX = 15;
            if (score2 >= 500) {
              boss_attack1.velocityX = -7;
              boss_attack2.velocityX = -7;
            }
            if (air_transform) {
              if (rasengan) {
                player.velocityX = 2;
                player.velocityY = 2.25;
                RASENGAN.velocityX = 2;
                RASENGAN.velocityY = 2.25;
              }
            }
            if (fire_transform) {
              if (fire_attack) {
                meteor.velocityY = 4;
              }
            }
            if (electric_transform) {
              if (kirin) {
                thunderDragon.velocityX = 2.25;
                thunderDragon.velocityY = 2.25;
              }
            }
          }
        }
        if (paused_game) {
          Game_Pause();
          enemy1.velocityX = 0;
          enemy2.velocityX = 0;
          basic_attack.velocityX = 0;
          basic_attack.velocityX = 0;
          if (score2 >= 500) {
            boss_attack1.velocityX = 0;
            boss_attack2.velocityX = 0;
          }
          if (air_transform) {
            if (rasengan) {
              player.velocityX = 0;
              player.velocityY = 0;
              RASENGAN.velocityX = 0;
              RASENGAN.velocityY = 0;
            }
          }
          if (fire_transform) {
          if (fire_attack) {
            meteor.velocityY = 0;
          }
          }
          if (electric_transform) {
            if (kirin) {
              thunderDragon.velocityX = 0;
              thunderDragon.velocityY = 0;
            }
          }
          if (keyWentDown("p")) {
            paused_game = false;
            enemy1.velocityX = -5;
            enemy2.velocityX = -5;
            basic_attack.velocityX = 15;
            basic_attack.velocityX = 15;
            if (score2 >= 500) {
              boss_attack1.velocityX = -7;
              boss_attack2.velocityX = -7;
            }
            if (air_transform) {
              if (rasengan) {
                player.velocityX = 2;
                player.velocityY = 2.25;
                RASENGAN.velocityX = 2;
                RASENGAN.velocityY = 2.25;
              }
            }
            if (fire_transform) {
              if (fire_attack) {
                meteor.velocityY = 4;
              }
            }
            if (electric_transform) {
              if (kirin) {
                thunderDragon.velocityX = 2.25;
                thunderDragon.velocityY = 2.25;
              }
            }
          }
        }
      } else {
        information();
        blueNinja_moveset();
        redNinja_moveset();
        yellowNinja_moveset();
        greenNinja_moveset();
        spriteInteractions();
        looping();
        powerUps();
        damageConditionals();
        Limits();
        if (score2 >= 500) {
          bossFight();
        }
        drawSprites();
        GameOver_and_ultimateAttacks();
        if (keyWentDown("e")) {
          how_to_play = true;
        }
        if (keyWentDown("p")) {
          paused_game = true;
        }
      }
    } else {
      selectYourCharacter();
      if (keyWentDown("space")) {
        character = true;
        basic_attack.setAnimation("attack 1.png_1");
        ultimate_attack.setAnimation("PikPng.com_laser-beam-png_447813.png_1");
        ultimate_attack.height = 25;
        ultimate_attack.width = 265;
        ultimate_attack.scale = 0.10;
      }
    }
  } else {
    Title_Screen();
    if (keyWentDown("space")) {
      game_start = true;
    }
  }
}

// Create your functions here
function backdrop() {
  background("darkblue");
  fill("brown");
  rect(0, 250, 400, 400);
  fill("red");
  rect(200, 75, 30, 175);
  rect(300, 75, 30, 175);
  rect(140, 50, 250, 30);
  fill("yellow");
  ellipse(50, 50, 75, 75);
  fill("green");
  rect(0, 150, 150, 100);
}
function information() {
  textSize(15);
  fill("black");
  text("NINJA CHRONICLES", 5, 180);
  fill("yellow");
  text("Score: " + score, 40, 200);
  fill("red");
  text("Health: " + health, 40, 220);
  fill("skyblue");
  text("Energy: " + energy, 40, 240);
  fill("red");
  textSize(20);
  text("Kills: " + kills, 40, 145);
  if (air_transform || fire_transform || electric_transform || earth_transform) {
    fill("lime");
    textSize(30);
    textFont("Calibri");
    text("POWER BAR: " + moves, 95, 30);
  }
  if (score2 >= 500) {
    fill("orange");
    textSize(35);
    text("FIGHT THE BOSS!!!", 35, 75);
    fill("lime");
    textSize(18);
    if (boss_levels == 1) {
      text("Boss Health: " + boss_health, boss.x - 100, boss.y - 100);
    }
    if (boss_levels == 2) {
      text("Boss Health: " + boss_health2, boss.x - 100, boss.y - 100);
    }
  }
}
function tutorial_screen() {
  background("black");
  fill("orange");
  textSize(30);
  text("HELP SCREEN", 90, 60);
  fill("lime");
  shape(25, 200, 0, 220, 25, 240);
  shape(373, 200, 400, 218, 373, 235);
  if (writings == 1) {
    fill("yellow");
    textSize(18);
    text("Controls:", 50, 125);
    fill("skyblue");
    textSize(15);
    text("- Arrows = Moving.", 50, 160);
    text("- W = Transformation.", 50, 185);
    text("- A = Basic attack.", 50, 210);
    text("- D = First ultimate attack.", 50, 235);
    text("- S = Super ultimate attack.", 50, 260);
    text("- E = This screen(help).", 50, 285);
    text("- P = Pause the game.", 50, 310);
  } else {
    if (mouseWentDown("leftButton") && mouseIsOver(arrow1)) {
    writings = writings - 1;
  }
  }
  if (writings == 2) {
    fill("yellow");
    textSize(18);
    text("Progression Throughout the Game:", 50, 125);
    fill("skyblue");
    textSize(15);
    text("To progress throughout the game, you need to fight", 50, 160);
    text("the zombies that will constantly attack you", 50, 175);
    text(" throughout the game. However, you can also evade", 47, 190);
    text("them while getting coins and health orbs. Coins", 50, 205);
    text("give you 5 points for each one you get and health", 50, 220);
    text("orbs will restore 30 HP for each one you get.", 50, 235);
    text("Defeating each zombie gives you 25 points.", 50, 250);
  }
  if (writings == 3) {
    fill("yellow");
    textSize(18);
    text("Elemental Transformations:", 50, 125);
    fill("skyblue");
    textSize(15);
    text("Each character has different transformations. To", 50, 160);
    text("transform, press W when you have maximum", 50, 175);
    text("energy(800 energy points). When you're in a", 50, 190);
    text("transformation, you will have enhanced speed,", 50, 205);
    text("strength, and access to their elemental powers.", 50, 220);
    text("Your transformation will run off once you used up", 50, 235);
    text("your power bar or energy.", 50, 250);
  }
  if (writings == 4) {
    fill("yellow");
    textSize(18);
    text("Boss Fights:", 50, 125);
    fill("skyblue");
    textSize(15);
    text("Each time you get 500 points, a boss will appear.", 50, 160);
    text("You will need to defeat it to continue. Each boss has", 50, 175);
    text("500 HP, and it has two options to attack: close", 50, 190);
    text("combat and ranged combat. It will choose these two", 50, 205);
    text("options randomly. After you've defeated it, it will", 50, 220);
    text("disappear and the zombies will return to the", 50, 235);
    text("stage. Each time you defeat a boss, another one", 50, 250);
    text("will be ready to show up the next turn!", 50, 265);
  }
  if (writings == 5) {
    fill("yellow");
    textSize(18);
    text("Game Over:", 50, 125);
    fill("skyblue");
    textSize(15);
    text("The game will be over when you move out of the", 50, 160);
    text("brown space(the ground) or your health reaches 0.", 50, 175);
    text("When the game is over, you can press the R key to", 50, 190);
    text("restart and go back to the title screen. The game", 50, 205);
    text("will reset!", 50, 220);
  }
  if (writings == 6) {
    fill("yellow");
    textSize(18);
    text("Final Thoughts:", 50, 125);
    fill("skyblue");
    textSize(15);
    text("The journey is in your hands, young ninja.", 50, 160);
    text("Good luck on your journey!", 50, 175);
    fill("lime");
    textSize(15);
    text("PRESS E AGAIN TO GET OUT!", 85, 350);
  } else {
  if (mouseWentDown("leftButton") && mouseIsOver(arrow2)) {
    writings = writings + 1;
  }
  }
}
function Game_Pause() {
  fill("skyblue");
  textFont("Times New Roman");
  textSize(50);
  text("GAME PAUSED!", 20, 200);
  fill("yellow");
  textSize(20);
  text("Press P key again to resume!", 65, 275);
}
function blueNinja_moveset() {
  if (blue) {
    if (air_transform) {
      if (gameover) {
        console.log("controls disabled");
      } else {
        if (keyDown("up")) {
          player.y = player.y - 6.5;
          player.setAnimation("air ninja walking.png_1_copy_1");
        }
        if (keyDown("down")) {
          player.y = player.y + 6.5;
          player.setAnimation("air ninja walking.png_1_copy_1");
        }
        if (keyDown("left")) {
          player.x = player.x - 6.5;
          player.setAnimation("air ninja walking.png_1_copy_1");
        }
        if (keyDown("right")) {
          player.x = player.x + 6.5;
          player.setAnimation("air ninja walking.png_1_copy_1");
        }
        if (energy > 19 && moves > 0) {
          if (keyWentDown("a")) {
            playSound("assets/Fast-Wind-Sound-Effect-(HD).mp3", false);
            energy = energy - 20;
            player.setAnimation("air_bullet.png_1_copy_1");
            basic_attack.x = player.x;
            basic_attack.y = player.y;
            moves = moves - 1;
          }
        }
        if (energy > 199 && moves > 1) {
            if (keyWentDown("d")) {
              playSound("assets/Tornado-Sound-Effect.mp3", false);
              player.setAnimation("air_vortex.png_1_copy_1_copy_1");
              energy = energy - 200;
              ultimate_attack.x = player.x + 120;
              ultimate_attack.y = player.y;
              moves = moves - 2;
            }
          }
        if (energy > 399 && moves > 6) {
          if (keyWentDown("s")) {
            rasengan = true;
            if (rasengan) {
              energy = energy - 400;
              playSound("assets/sonido-del-rasengan-sound-effect-HD.mp3", false);
              playSound("assets/Ringtone-Naruto-rasengan'.mp3", false);
              player.x = 50;
              player.y = 70;
              player.rotation = 70;
              player.velocityX = 2;
              player.velocityY = 2.25;
              player.setCollider("circle");
              player.setAnimation("air_vortex.png_1_copy_1_copy_1");
              RASENGAN.x = player.x + 65;
              RASENGAN.y = player.y + 90;
              RASENGAN.velocityX = 2;
              RASENGAN.velocityY = 2.25;
            }
            moves = moves - 7;
          }
        }
        if (moves <= 0 || energy <= 0) {
          moves = 30;
          air_transform = false;
          playSound("assets/Dragon-Ball-Super-SSGSS-Aura-power-down.mp3", false);
          basic_attack.setAnimation("attack 1.png_1");
          ultimate_attack.setAnimation("PikPng.com_laser-beam-png_447813.png_1");
          ultimate_attack.height = 25;
          ultimate_attack.width = 265;
          ultimate_attack.scale = 0.10;
        }
      }
    } else {
      if (gameover) {
        console.log("controls disabled");
      } else {
        if (keyDown("up")) {
          player.y = player.y - 5;
          player.setAnimation("ninja walking.png_1");
        }
        if (keyDown("down")) {
          player.y = player.y + 5;
          player.setAnimation("ninja walking.png_1");
        }
        if (keyDown("left")) {
          player.x = player.x - 5;
          player.setAnimation("ninja walking.png_1");
        }
        if (keyDown("right")) {
        player.x = player.x + 5;
        player.setAnimation("ninja walking.png_1");
        }
        if (energy > 19) {
          if (keyWentDown("a")) {
            playSound("assets/Ki-Blast-(DBZ-Sound-Effect).mp3", false);
            energy = energy - 20;
            player.setAnimation("basic_attack.png_1");
            basic_attack.x = player.x;
            basic_attack.y = player.y;
          }
        }
        if (energy > 199) {
            if (keyWentDown("d")) {
              playSound("assets/-Dragon-Ball----Kamehameha-Fire-Sound-Effect--Free-Ringtone-Download-.mp3", false);
              player.setAnimation("spiral beam");
              energy = energy - 200;
              ultimate_attack.x = player.x + 105;
              ultimate_attack.y = player.y;
            }
          }
        if (energy > 399) {
          if (keyWentDown("s")) {
            playSound("assets/DBZ-Explosion-Sound-Effect-1.mp3", false);
            energy = energy - 400;
            player.setAnimation("ultimate_attack2_pose");
            ultimate_attack2.x = player.x;
            ultimate_attack2.y = player.y;
          }
        }
        if (energy > 799) {
          if (keyWentDown("w")) {
            playSound("assets/Anime-Powerup-with-Aura-Burst-(Dragonball-Super-Saiyan-2)---Sound-Effect-for-editing.mp3", false);
            air_transform = true;
            player.setAnimation("air_ninja_idle.png_1_copy_1");
            basic_attack.setAnimation("air bullet");
            ultimate_attack.setAnimation("air vortex");
            ultimate_attack.height = 130;
            ultimate_attack.width = 50000000000;
            ultimate_attack.scale = 0.05;
          }
        }
      }
    }
  }
}

function redNinja_moveset() {
  if (red) {
    if (fire_transform) {
      if (gameover) {
        console.log("controls disabled");
      } else {
        if (keyDown("up")) {
        player.y = player.y - 6.5;
        player.setAnimation("fire ninja walking");
          }
        if (keyDown("down")) {
        player.y = player.y + 6.5;
        player.setAnimation("fire ninja walking");
          }
        if (keyDown("left")) {
        player.x = player.x - 6.5;
        player.setAnimation("fire ninja walking");
          }
        if (keyDown("right")) {
          player.x = player.x + 6.5;
          player.setAnimation("fire ninja walking");
          }
        if (energy > 19 && moves > 0) {
        if (keyWentDown("a")) {
          playSound("assets/Fireball-Sound-Effect.mp3", false);
          energy = energy - 20;
          player.setAnimation("fireballjutsu.png");
          basic_attack.x = player.x;
          basic_attack.y = player.y;
          moves = moves - 1;
        }
          }
        if (energy > 199 && moves > 1) {
          if (keyWentDown("d")) {
            playSound("assets/Dragon-Breathing-Fire-Sound-Effect.mp3", false);
            energy = energy - 200;
            player.setAnimation("dragon flame.png");
            ultimate_attack.x = player.x + 120;
            ultimate_attack.y = player.y - 5;
            moves = moves - 2;
          }
        }
        if (energy > 399 && moves > 6) {
        if (keyWentDown("s")) {
          fire_attack = true;
          if (fire_attack) {
            energy = energy - 400;
            moves = moves - 5;
            energy = energy - 400;
            playSound("assets/Meteor-Impact-Sound-Effect.mp3", false);
            player.setAnimation("red ultimate_attack2_pose_copy_1");
            meteor.y = -50;
            meteor.velocityY = 4;
          }
          moves = moves - 7;
        }
          }
        if (moves <= 0 || energy <= 0) {
          moves = 30;
          fire_transform = false;
          playSound("assets/Dragon-Ball-Super-SSGSS-Aura-power-down.mp3", false);
          basic_attack.setAnimation("attack 1.png_1");
          basic_attack.scale = 0.2;
          ultimate_attack.setAnimation("PikPng.com_laser-beam-png_447813.png_1");
          ultimate_attack.height = 500;
          ultimate_attack.width = 3000;
          ultimate_attack.scale = 0.10;
        }
      }
    } else {
      if (gameover) {
        console.log("controls disabled");
      } else {
        if (keyDown("up")) {
        player.y = player.y - 5;
        player.setAnimation("red ninja walking.png_1_copy_1");
          }
        if (keyDown("down")) {
        player.y = player.y + 5;
        player.setAnimation("red ninja walking.png_1_copy_1");
          }
        if (keyDown("left")) {
        player.x = player.x - 5;
        player.setAnimation("red ninja walking.png_1_copy_1");
          }
        if (keyDown("right")) {
          player.x = player.x + 5;
          player.setAnimation("red ninja walking.png_1_copy_1");
          }
        if (energy > 19) {
        if (keyWentDown("a")) {
          playSound("assets/Ki-Blast-(DBZ-Sound-Effect).mp3", false);
          energy = energy - 20;
          player.setAnimation("red basic_attack.png_1_copy_1");
          basic_attack.x = player.x;
          basic_attack.y = player.y;
        }
          }
        if (energy > 199) {
          if (keyWentDown("d")) {
            playSound("assets/-Dragon-Ball----Kamehameha-Fire-Sound-Effect--Free-Ringtone-Download-.mp3", false);
            energy = energy - 200;
            player.setAnimation("red beam");
            ultimate_attack.x = player.x + 105;
            ultimate_attack.y = player.y;
          }
        }
        if (energy > 399) {
        if (keyWentDown("s")) {
          playSound("assets/DBZ-Explosion-Sound-Effect-1.mp3", false);
          energy = energy - 400;
          player.setAnimation("red ultimate_attack2_pose_copy_1");
          ultimate_attack2.x = player.x;
          ultimate_attack2.y = player.y;
        }
          }
        if (energy > 799) {
          if (keyWentDown("w")) {
              playSound("assets/Anime-Powerup-with-Aura-Burst-(Dragonball-Super-Saiyan-2)---Sound-Effect-for-editing.mp3", false);
              fire_transform = true;
              player.setAnimation("fire ninja idle");
              basic_attack.setAnimation("fire ball.png_1");
              basic_attack.scale = 0.12;
              ultimate_attack.setAnimation("dragon bullet.png_1");
              ultimate_attack.width = 18;
              ultimate_attack.scale = 1;
            }
        }
      }
    }
  }
}

function yellowNinja_moveset() {
  if (yellow) {
    if (electric_transform) {
      if (gameover) {
        console.log("controls disabled");
      } else {
        if (keyDown("up")) {
          player.y = player.y - 6.5;
          player.setAnimation("electric ninja walking.png_1");
        }
        if (keyDown("down")) {
          player.y = player.y + 6.5;
          player.setAnimation("electric ninja walking.png_1");
        }
        if (keyDown("left")) {
          player.x = player.x - 6.5;
          player.setAnimation("electric ninja walking.png_1");
        }
        if (keyDown("right")) {
          player.x = player.x + 6.5;
          player.setAnimation("electric ninja walking.png_1");
        }
        if (energy > 19 && moves > 0) {
          if (keyWentDown("a")) {
            playSound("assets/Electricity-Crackling-Sound-Effect.mp3", false);
            energy = energy - 20;
            player.setAnimation("electroball.png");
            basic_attack.x = player.x;
            basic_attack.y = player.y;
            moves = moves - 1;
          }
        }
        if (energy > 199 && moves > 1) {
            if (keyWentDown("d")) {
            playSound("assets/DBZ-Explosion-Sound-Effect-1.mp3", false);
            energy = energy - 200;
            player.setAnimation("yellow ultimate_attack2_pose");
            ultimate_attack2.x = player.x;
            ultimate_attack2.y = player.y;
            moves = moves - 2;
            }
          }
        if (energy > 399 && moves > 6) {
          if (keyWentDown("s")) {
            kirin = true;
            if (kirin) {
              playSound("assets/Dragon-Roar---Free-Sound-Effect.mp3", false);
              energy = energy - 400;
              player.x = 50;
              player.y = 200;
              player.rotation = 15;
              player.setAnimation("electro stream.png_1");
              thunderDragon.x = player.x;
              thunderDragon.y = player.y - 150;
              thunderDragon.velocityX = 2.25;
              thunderDragon.velocityY = 2.25;
              thunderDragon.rotation = 40;
            }
            moves = moves - 7;
          }
        }
        if (moves <= 0 || energy <= 0) {
          moves = 30;
          electric_transform = false;
          playSound("assets/Dragon-Ball-Super-SSGSS-Aura-power-down.mp3", false);
          basic_attack.setAnimation("attack 1.png_1");
          basic_attack.scale = 0.2;
          ultimate_attack2.setAnimation("explosion.png_1");
        }
      }
    } else {
      if (gameover) {
        console.log("controls disabled");
      } else {
        if (keyDown("up")) {
          player.y = player.y - 5;
          player.setAnimation("yellow ninja walking.png_1");
        }
        if (keyDown("down")) {
          player.y = player.y + 5;
          player.setAnimation("yellow ninja walking.png_1");
        }
        if (keyDown("left")) {
          player.x = player.x - 5;
          player.setAnimation("yellow ninja walking.png_1");
        }
        if (keyDown("right")) {
        player.x = player.x + 5;
        player.setAnimation("yellow ninja walking.png_1");
        }
        if (energy > 19) {
          if (keyWentDown("a")) {
            playSound("assets/Ki-Blast-(DBZ-Sound-Effect).mp3", false);
            energy = energy - 20;
            player.setAnimation("yellow basic_attack.png_1");
            basic_attack.x = player.x;
            basic_attack.y = player.y;
          }
        }
        if (energy > 199) {
            if (keyWentDown("d")) {
              playSound("assets/-Dragon-Ball----Kamehameha-Fire-Sound-Effect--Free-Ringtone-Download-.mp3", false);
              player.setAnimation("yellow beam.png_1");
              energy = energy - 200;
              ultimate_attack.x = player.x + 105;
              ultimate_attack.y = player.y;
            }
          }
        if (energy > 399) {
          if (keyWentDown("s")) {
            playSound("assets/DBZ-Explosion-Sound-Effect-1.mp3", false);
            energy = energy - 400;
            player.setAnimation("yellow ultimate_attack2_pose");
            ultimate_attack2.x = player.x;
            ultimate_attack2.y = player.y;
          }
        }
        if (energy > 799) {
          if (keyWentDown("w")) {
            playSound("assets/Anime-Powerup-with-Aura-Burst-(Dragonball-Super-Saiyan-2)---Sound-Effect-for-editing.mp3", false);
            electric_transform = true;
            player.setAnimation("electric ninja idle.png");
            basic_attack.setAnimation("electroball.png_1");
            basic_attack.scale = 0.15;
            ultimate_attack2.setAnimation("electro blast");
          }
        }
      }
    }
  }
}

function greenNinja_moveset() {
  if (green) {
    if (earth_transform) {
      if (gameover) {
        console.log("controls disabled");
      } else {
        if (keyDown("up")) {
          player.y = player.y - 6.5;
          player.setAnimation("earth ninja walking.png_1");
        }
        if (keyDown("down")) {
          player.y = player.y + 6.5;
          player.setAnimation("earth ninja walking.png_1");
        }
        if (keyDown("left")) {
          player.x = player.x - 6.5;
          player.setAnimation("earth ninja walking.png_1");
        }
        if (keyDown("right")) {
          if (player.isTouching(earth_wall)) {
                player.x = player.x + 0;
              } else {
          player.x = player.x + 6.5;
          player.setAnimation("earth ninja walking.png_1");
        }
        }
        if (energy > 19 && moves > 0) {
          if (keyWentDown("a")) {
            playSound("assets/Ground-Smashing-Sound-Effect.mp3", false);
            energy = energy - 20;
            player.setAnimation("boulder blast");
            basic_attack.x = player.x;
            basic_attack.y = player.y;
            moves = moves - 1;
          }
        }
        if (energy > 199 && moves > 1) {
            if (keyWentDown("d")) {
              playSound("assets/Ground-Smashing-Sound-Effect.mp3", false);
              player.setAnimation("green_ultimate_attack2_pose");
              energy = energy - 200;
              ultimate_attack.x = player.x + 90;
              ultimate_attack.y = player.y;
              moves = moves - 2;
            }
          }
        if (energy > 399 && moves > 6) {
          if (keyWentDown("s")) {
            wall = true;
            if (wall) {
              energy = energy - 400;
              playSound("assets/Ground-Smashing-Sound-Effect.mp3", false);
              earth_wall.x = player.x + 105;
              earth_wall.y = 312;
            }
            moves = moves - 7;
          }
        }
        if (moves <= 0 || energy <= 0) {
          moves = 30;
          earth_transform = false;
          playSound("assets/Dragon-Ball-Super-SSGSS-Aura-power-down.mp3", false);
          basic_attack.setAnimation("attack 1.png_1");
          basic_attack.scale = 0.2;
          ultimate_attack.setAnimation("PikPng.com_laser-beam-png_447813.png_1");
          ultimate_attack.scale = 0.1;
          ultimate_attack.width = 2000;
        }
      }
    } else {
      if (gameover) {
        console.log("controls disabled");
      } else {
        if (keyDown("up")) {
          player.y = player.y - 5;
          player.setAnimation("green ninja walking.png_1");
        }
        if (keyDown("down")) {
          player.y = player.y + 5;
          player.setAnimation("green ninja walking.png_1");
        }
        if (keyDown("left")) {
          player.x = player.x - 5;
          player.setAnimation("green ninja walking.png_1");
        }
        if (keyDown("right")) {
        player.x = player.x + 5;
        player.setAnimation("green ninja walking.png_1");
        }
        if (energy > 19) {
          if (keyWentDown("a")) {
            playSound("assets/Ki-Blast-(DBZ-Sound-Effect).mp3", false);
            energy = energy - 20;
            player.setAnimation("green basic_attack.png_1");
            basic_attack.x = player.x;
            basic_attack.y = player.y;
          }
        }
        if (energy > 199) {
           if (keyWentDown("d")) {
              playSound("assets/-Dragon-Ball----Kamehameha-Fire-Sound-Effect--Free-Ringtone-Download-.mp3", false);
              player.setAnimation("green beam");
              energy = energy - 200;
              ultimate_attack.x = player.x + 105;
              ultimate_attack.y = player.y;
            }
          }
        if (energy > 399) {
          if (keyWentDown("s")) {
            playSound("assets/DBZ-Explosion-Sound-Effect-1.mp3", false);
            energy = energy - 400;
            player.setAnimation("green_ultimate_attack2_pose");
            ultimate_attack2.x = player.x;
            ultimate_attack2.y = player.y;
          }
        }
        if (energy > 799) {
          if (keyWentDown("w")) {
            playSound("assets/Anime-Powerup-with-Aura-Burst-(Dragonball-Super-Saiyan-2)---Sound-Effect-for-editing.mp3", false);
            earth_transform = true;
            player.setAnimation("earth ninja idle.png_1");
            basic_attack.setAnimation("boulder.png_1");
            basic_attack.scale = 0.08;
            ultimate_attack.setAnimation("earth spikes");
            ultimate_attack.scale = 1;
            ultimate_attack.width = 15;
          }
        }
      }
    }
  }
}

function spriteInteractions() {
  if (player.isTouching(coin)) {
   playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3", false);
   if (score2 < 500) {
     score = score + 5;
     score2 = score2 + 5;
   }
   energy = energy + 30;
   coin.x = -50;
  }
  if (player.isTouching(heart)) {
    playSound("assets/Super-Mario-Power-Up-Sound-Effect.mp3", false);
    health = health + 30;
    heart.x = -50;
  }
  if (player.isTouching(enemy1)) {
    health = health - 1;
  }
  if (player.isTouching(enemy2)) {
    health = health - 1;
  }
}
function looping() {
  if (enemy1.x < -5) {
    enemy1.x = 400;
    enemy1.y = randomNumber(250,350);
  }
  if (enemy2.x < -5) {
    enemy2.x = 400;
    enemy2.y = randomNumber(250,350);
  }
  if (score2 >= 500) {
  if (basic_attack.x >= 400) {
  basic_attack.x = 0;
  basic_attack.y = -50;
  }
} else {
  if (basic_attack.x >= 200) {
    basic_attack.x = 0;
    basic_attack.y = -50;
  }
}
}
function powerUps() {
  if (randomNumber(1, 100) == 1) {
    coin.x = randomNumber(50, 200);
    coin.y = randomNumber(250, 350);
  }
  if (randomNumber(1, 350) == 1) {
    heart.x = randomNumber(50, 200);
    heart.y = randomNumber(250, 350);
  }
}
function damageConditionals() {
if (score2 >= 500) {
  if (time3 >= 4.5) {
    time3 = 0;
    boss.x = 328;
    boss.y = 280;
  }
  if (player.isTouching(boss)) {
    health = health - 1;
    time3 = time3 + 0.25;
  }
  if (RASENGAN.isTouching(boss)) {
  boss_health = boss_health - 50;
}
if (meteor.isTouching(boss)) {
  boss_health = boss_health - 50;
}
if (thunderDragon.isTouching(boss)) {
  boss_health = boss_health - 50;
}
if (earth_wall.isTouching(boss)) {
  boss_health = boss_health - 50;
  wall_durability = wall_durability - 1;
}
  if (player.isTouching(boss_attack1)) {
   health = health - 1;
  }
  if (player.isTouching(boss_attack2)) {
    health = health - 1;
  }
  if (basic_attack.isTouching(boss_attack1)) {
    basic_attack.x = 0;
    basic_attack.y = -50;
    boss_attack1.x = 300;
    boss_attack1.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (basic_attack.isTouching(boss_attack2)) {
    basic_attack.x = 0;
    basic_attack.y = -50;
    boss_attack2.x = 300;
    boss_attack2.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (ultimate_attack.isTouching(boss_attack1)) {
    time = time + 0.25;
    boss_attack1.x = 300;
    boss_attack1.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (ultimate_attack.isTouching(boss_attack2)) {
    time = time + 0.25;
    boss_attack2.x = 300;
    boss_attack2.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (ultimate_attack2.isTouching(boss_attack1)) {
    ultimate_attack2.scale = ultimate_attack2.scale + 0.01;
    time2 = time2 + 0.25;
    boss_attack1.x = 300;
    boss_attack1.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (ultimate_attack2.isTouching(boss_attack2)) {
    ultimate_attack2.scale = ultimate_attack2.scale + 0.01;
    time2 = time2 + 0.25;
    boss_attack2.x = 300;
    boss_attack2.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (RASENGAN.isTouching(boss_attack1)) {
    boss_attack1.x = 300;
    boss_attack1.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (RASENGAN.isTouching(boss_attack2)) {
    boss_attack2.x = 300;
    boss_attack2.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
}
if (meteor.isTouching(boss_attack1)) {
    boss_attack1.x = 300;
    boss_attack1.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (meteor.isTouching(boss_attack2)) {
    boss_attack2.x = 300;
    boss_attack2.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (thunderDragon.isTouching(boss_attack1)) {
    boss_attack1.x = 300;
    boss_attack1.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (thunderDragon.isTouching(boss_attack2)) {
    boss_attack2.x = 300;
    boss_attack2.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (earth_wall.isTouching(boss_attack1)) {
    boss_attack1.x = 300;
    boss_attack1.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
    wall_durability = wall_durability - 1;
  }
  if (earth_wall.isTouching(boss_attack2)) {
    boss_attack2.x = 300;
    boss_attack2.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
    wall_durability = wall_durability - 1;
  }
if (boss_attack1.x < 0) {
    boss_attack1.x = 300;
    boss_attack2.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (boss_attack2.x < 0) {
    boss_attack2.x = 300;
    boss_attack2.y = randomNumber(250,350);
    playSound("assets/Fireball-Sound-Effect.mp3", false);
    loops = loops + 0.5;
  }
  if (loops == 3) {
    loops = 0;
    boss_attack1.x = 1000;
    boss_attack1.y = -400;
    boss_attack2.x = 1000;
    boss_attack2.y = -400;
  }
if (basic_attack.isTouching(boss)) {
  boss_health = boss_health - 50;
  basic_attack.x = 0;
  basic_attack.y = -50;
}
if (ultimate_attack2.isTouching(boss)) {
  boss_health = boss_health - 50;
  ultimate_attack2.scale = ultimate_attack2.scale + 0.1;
  time2 = time2 + 0.25;
}
if (ultimate_attack.isTouching(boss)) {
  boss_health = boss_health - 50;
  time = time + 0.25;
}
}
if (meteor.isTouching(enemy1)) {
  damage1 = damage1 - 50;
}
if (basic_attack.isTouching(enemy1)) {
  damage1 = damage1 - 50;
  basic_attack.x = 0;
  basic_attack.y = -50;
}
if (basic_attack.isTouching(enemy2)) {
  damage2 = damage2 - 50;
  basic_attack.x = 0;
  basic_attack.y = -50;
}
if (ultimate_attack.isTouching(enemy1)) {
  damage1 = damage1 - 50;
  time = time + 0.25;
}
if (ultimate_attack.isTouching(enemy2)) {
  damage2 = damage2 - 50;
  time = time + 0.25;
}
if (time >= 3.5) {
  time = 0;
  ultimate_attack.x = 0;
  ultimate_attack.y = -50;
}
if (ultimate_attack2.isTouching(enemy1)) {
  damage1 = damage1 - 50;
  ultimate_attack2.scale = ultimate_attack2.scale + 0.1;
  time2 = time2 + 0.25;
  ultimate_attack2.scale = ultimate_attack2.scale + 0.1;
}
if (ultimate_attack2.isTouching(enemy2)) {
  damage2 = damage2 - 50;
  ultimate_attack2.scale = ultimate_attack2.scale + 0.1;
  time2 = time2 + 0.25;
  ultimate_attack2.scale = ultimate_attack2.scale + 0.1;
}
if (time2 >= 3.5) {
  stopSound("assets/DBZ-Explosion-Sound-Effect-1.mp3");
  time2 = 0;
  ultimate_attack2.scale = 0.1;
  ultimate_attack2.x = -50;
  ultimate_attack2.y = -150;
}
if (RASENGAN.isTouching(enemy1)) {
  damage1 = damage1 - 50;
}
if (RASENGAN.isTouching(enemy2)) {
  damage2 = damage2 - 50;
}
if (thunderDragon.isTouching(enemy1)) {
  damage1 = damage1 - 50;
}
if (thunderDragon.isTouching(enemy2)) {
  damage2 = damage2 - 50;
}
if (earth_wall.isTouching(enemy1)) {
  damage1 = damage1 - 50;
  wall_durability = wall_durability - 1;
}
if (earth_wall.isTouching(enemy2)) {
  damage2 = damage2 - 50;
  wall_durability = wall_durability - 1;
}

if (meteor.isTouching(enemy2)) {
  damage2 = damage2 - 50;
}
if (damage1 == 0) {
  playSound("assets/Roblox-Death-Sound---Sound-Effect-(HD).mp3", false);
  kills = kills + 1;
  score2 = score2 + 25;
  score = score + 25;
  enemy1.setAnimation("burst06_1");
  damage1 = 200;
  enemy1.x = 400;
  enemy1.y = randomNumber(250,350);
} else {
  enemy1.setAnimation("rpgcharacter_02_1");
}
if (damage2 == 0) {
  playSound("assets/Roblox-Death-Sound---Sound-Effect-(HD).mp3", false);
  kills = kills + 1;
  score2 = score2 + 25;
  score = score + 25;
  enemy2.setAnimation("burst06_1");
  damage2 = 200;
  enemy2.x = 400;
  enemy2.y = randomNumber(250,350);
} else {
  enemy2.setAnimation("rpgcharacter_05_1");
}
}
function Limits() {
if (energy > 800) {
  energy = 800;
}
if (energy < 0) {
  energy = 0;
}
if (health > 500) {
  health = 500;
}
if (boss_levels > 2) {
  boss_levels = 1;
}
}

function bossFight() {
  boss.visible = true;
  enemy1.x = 500;
  enemy1.y = 250;
  enemy1.velocityX = 0;
  enemy2.x = 500;
  enemy2.y = 250;
  enemy2.velocityX = 0;
  if (boss_levels == 1) {
      boss.setAnimation("samurai_boss.png");
      boss_attack1.setAnimation("katana_blade.png_1");
      boss_attack2.setAnimation("katana_blade.png_1");
      boss_attack1.scale = 0.08;
      boss_attack2.scale = 0.08;
      boss_attack1.rotation = 0;
      boss_attack2.rotation = 0;
      boss.scale = 0.35;
      if (randomNumber(1,300) == 1) {
  playSound("assets/Fireball-Sound-Effect.mp3", false);
  boss_attack1.x = 300;
  boss_attack1.y = randomNumber(250,350);
  boss_attack1.velocityX = -7;
  playSound("assets/Fireball-Sound-Effect.mp3", false);
  boss_attack2.x = 300;
  boss_attack2.y = randomNumber(250,350);
  boss_attack2.velocityX = -7;
  }
if (randomNumber(1,500) == 1) {
  boss.x = player.x + 75;
  boss.y = player.y;
  }
  }
  if (boss_levels == 2) {
    boss.setAnimation("hellraiser.png");
    boss_attack1.setAnimation("dagger_1");
    boss_attack2.setAnimation("dagger_1");
    boss_attack1.rotation = 90;
    boss_attack2.rotation = 90;
    boss_attack1.scale = 0.13;
    boss_attack2.scale = 0.13;
    boss.scale = 0.75;
    if (randomNumber(1,200) == 1) {
  playSound("assets/Fireball-Sound-Effect.mp3", false);
  boss_attack1.x = 300;
  boss_attack1.y = randomNumber(250,350);
  boss_attack1.velocityX = -7;
  playSound("assets/Fireball-Sound-Effect.mp3", false);
  boss_attack2.x = 300;
  boss_attack2.y = randomNumber(250,350);
  boss_attack2.velocityX = -7;
  }
if (randomNumber(1, 400) == 1) {
  boss = player.x + 75;
  boss.y = player.y;
  }
  }
if (boss_health <= 0 || boss_health2 <= 0) {
    boss_health = 5000;
    boss_health2 = 10000;
    boss_levels = boss_levels + 1;
    health = health + 250;
    score2 = 0;
    boss.visible = false;
    enemy1.x = 400;
    enemy1.y = randomNumber(250,350);
    enemy2.x = 400;
    enemy2.y = randomNumber(250,350);
    enemy1.velocityX = -5;
    enemy1.velocityX = enemy1.velocityX - 1;
    enemy2.velocityX = -5;
    enemy2.velocityX = enemy2.velocityX - 1;
  }
}

function GameOver_and_ultimateAttacks() {
  if ((rasengan || fire_attack) || kirin || wall) {
    if (rasengan) {
      if (RASENGAN.y > 270) {
        playSound("assets/DBZ-Explosion-Sound-Effect-1.mp3", false);
        RASENGAN.x = 200;
        RASENGAN.y = -400;
        RASENGAN.velocityX = 0;
        RASENGAN.velocityY = 0;
        player.x = 50;
        player.y = 300;
        player.velocityX = 0;
        player.velocityY = 0;
        player.rotation = 0;
        rasengan = false;
      }
    }
    if (fire_attack) {
      if (meteor.y > 270) {
        playSound("assets/DBZ-Explosion-Sound-Effect-1.mp3", false);
        meteor.y = -400;
        meteor.velocityY = 0;
        fire_attack = false;
      }
    }
    if (kirin) {
      if (thunderDragon.y > 225) {
        playSound("assets/DBZ-Explosion-Sound-Effect-1.mp3", false);
        thunderDragon.x = 200;
        thunderDragon.y = -400;
        thunderDragon.velocityX = 0;
        thunderDragon.velocityY = 0;
        player.x = 50;
        player.y = 300;
        player.rotation = 0;
        kirin = false;
      }
    }
    if (wall) {
      if (wall_durability <= 0) {
        wall_durability = 20;
        earth_wall.x = 200;
        earth_wall.y = -400;
        wall = false;
      }
    }
  } else {
    if (health < 0 || player.y < 240 || player.x < 0 || player.y > 500) {
      gameover = true;
      health = 0;
      player.x = -1000;
      player.y = 300;
      background("black");
      fill("red");
      textSize(45);
      text("GAME OVER!", 50, 200);
      fill("yellow");
      textSize(14);
      text("'It's not over yet, press 'R' to go back to title screen!'", 35, 250);
      stopSound();
      if (keyWentDown("r")) {
        gameover = false;
        character = false;
        health = 500;
        energy = 800;
        score = 0;
        game_start = false;
        damage1 = 200;
        damage2 = 200;
        kills = 0;
        time = 0;
        time2 = 0;
        boss_health = 5000;
        score2 = 0;
        time3 = 0;
        moves = 30;
        loops = 0;
        air_transform = false;
        fire_transform = false;
        electric_transform = false;
        earth_transform = false;
        rasengan = false;
        fire_attack = false;
        kirin = false;
        wall = false;
        blue = false;
        red = false;
        yellow = false;
        green = false;
        wall_durability = 20;
        page = 1;
        player.x = 50;
        player.y = 300;
        boss.visible = false;
        enemy1.x = 400;
        enemy1.y = randomNumber(250,350);
        enemy2.x = 400;
        enemy2.y = randomNumber(250,350);
        enemy1.velocityX = -5;
        enemy1.velocityX = enemy1.velocityX - 1;
        enemy2.velocityX = -5;
        enemy2.velocityX = enemy2.velocityX - 1;
        playSound("assets/The-Ninja-Warriors-(Stage-1-Theme).mp3", true);
        how_to_play = false;
        writings = 1;
        boss_levels = 1;
        paused_game = false;
        boss_health2 = 10000;
        var health_loss = 0;
      }
    }
  }
}
function selectYourCharacter() {
  background("black");
  fill("orange");
  textSize(25);
  text("SELECT YOUR CHARACTER", 30, 60);
  fill("lime");
  textSize(15);
  text("PRESS SPACE TO CONTINUE!", 85, 350);
  fill("lime");
  shape(25, 200, 0, 220, 25, 240);
  shape(373, 200, 400, 218, 373, 235);
  if (mouseWentDown("leftButton") && mouseIsOver(arrow1)) {
    page = page - 1;
  }
  if (mouseWentDown("leftButton") && mouseIsOver(arrow2)) {
    page = page + 1;
  }
  if (page == 1) {
    fill("darkblue");
  ellipse(75, 150, 75, 75);
  fill("white");
  noStroke();
  arc(35, 160, 50, 50, 270, 0);
  rect(50, 142, 50, 18);
  arc(100, 160, 50, 50, 180, -90);
  fill("red");
  ellipse(200, 150, 75, 75);
  fill("white");
  noStroke();
  arc(155, 160, 50, 50, 270, 0);
  rect(163, 142, 50, 18);
  arc(220, 160, 50, 50, 180, -90);
  fill("yellow");
  ellipse(325, 150, 75, 75);
  fill("white");
  noStroke();
  arc(283, 160, 50, 50, 270, 0);
  rect(293, 142, 50, 18);
  arc(353, 160, 50, 50, 180, -90);
  fill("darkgreen");
  ellipse(75, 265, 75, 75);
  fill("white");
  noStroke();
  arc(35, 275, 50, 50, 270, 0);
  rect(50, 257, 50, 18);
  arc(100, 275, 50, 50, 180, -90);
    if (blue) {
  fill("skyblue");
  textSize(15);
  text("(You chose 'Blue Ninja', the master of air)", 50, 380);
  } else {
    if (mouseIsOver(selection1)) {
        fill("skyblue");
        textSize(15);
        text("BLUE NINJA", 30, 100);
    }
    if (mouseWentDown("leftButton") && (mouseIsOver(selection1))) {
    player.setAnimation("ninja idle.png_1");
    blue = true;
    red = false;
    yellow = false;
    green = false;
    fill("skyblue");
    textSize(15);
    text("(You chose 'Blue Ninja', the master of air)", 50, 380);
        }
  }
  if (red) {
  fill("red");
  textSize(15);
  text("(You chose 'Red Ninja', the master of fire)", 50, 380);
  } else {
  if (mouseIsOver(selection2)) {
      fill("red");
      textSize(15);
      text("RED NINJA", 155, 100);
  }
  if (mouseWentDown("leftButton") && mouseIsOver(selection2)) {
    player.setAnimation("red ninja idle.png_1_copy_1");
    red = true;
    blue = false;
    yellow = false;
    green = false;
    fill("red");
    textSize(15);
    text("(You chose 'Red Ninja', the master of fire)", 50, 380); 
  }
  }
  if (yellow) {
    fill("yellow");
    textSize(15);
    text("(You chose 'Yellow Ninja', the master of lightning)", 30, 380);
  } else {
    if (mouseIsOver(selection3)) {
      fill("yellow");
      textSize(15);
      text("YELLOW NINJA", 270, 100);
    }
    if (mouseWentDown("leftButton") && mouseIsOver(selection3)) {
      player.setAnimation("yellow ninja idle.png_1");
      red = false;
      blue = false;
      yellow = true;
      green = false;
      fill("yellow");
      textSize(15);
      text("(You chose 'Yellow Ninja', the master of lightning)", 30, 380);
    }
  }
  if (green) {
    fill("green");
    textSize(15);
    text("(You chose 'Green Ninja', the master of earth)", 40, 380);
  } else {
    if (mouseIsOver(selection4)) {
      fill("green");
      textSize(15);
      text("GREEN NINJA", 25, 220);
    }
    if (mouseWentDown("leftButton") && mouseIsOver(selection4)) {
      player.setAnimation("green ninja idle.png_1");
      red = false;
      blue = false;
      yellow = false;
      green = true;
      fill("green");
      textSize(15);
      text("(You chose 'Green Ninja', the master of earth)", 30, 380);
    }
  }
    }
}
function Title_Screen() {
  background("black");
  fill("darkblue");
  ellipse(320, 145, 75, 75);
  fill("white");
  noStroke();
  arc(283, 155, 50, 50, 270, 0);
  rect(290, 138, 50, 18);
  arc(350, 155, 50, 50, 180, -90);
  fill("red");
  textSize(80);
  text("NINJA", 35, 180);
  fill("gold");
  textSize(50);
  text("CHRONICLES", 65, 230);
  fill("lime");
  textSize(15);
  text("PRESS SPACE TO START", 100, 300);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
