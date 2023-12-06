<script lang="ts">
	import type { PageData } from "./$types";

    export let nameList: any;
	nameList = [
		'1 โฟล์ค',
		'2 คิม',
		'3 กีตาร์',
		'4 เต้',
		'5 ก้อง ศุภณัฐ',
		'6 อู๋',
		'7 อ๋อง',
		'8 กราฟฟิก',
		'9 นาโน',
		'10 อั้ม',
		'11 เอ็กซ์',
		'12 ก้อง ณฐพล',
		'13 ไกด์',
		'14 เฟิร์ส',
		'15 บิว',
		'16 โบ',
		'17 ปิ่น',
		'18 อลิน',
		'19 เอแคร์',
		'20 มีนา',
		'21 อันดา',
		'22 มะนาว',
		'23 ปาย',
		'24 เชลซี',
		'25 ปาล์ม',
		'26 เชียร์',
		'27 ซิง',
		'28 ไผ่',
		'29 น้ำอิง',
		'30 ภีมภัทร',
		'31 กะทิ',
		'32 ลูกโซ่',
		'33 วีซ่า',
        'ครูสายรุ้ง',
        'ครูเต๋า',
        'ครูปุ๊ก',
	];


    export let data: PageData;

    export let currentName: any;
    currentName = nameList[data.requestDetails.classId - 1];
</script>

<style>
    .full-height {
        min-height: 100vh; /* This will make the div at least the height of the viewport */
        display: flex;
        flex-direction: column;
        justify-content: center; /* This will center the content vertically */
    }
</style>

<div class="bg-white dark:bg-gray-900 full-height">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold text-green-400 dark:text-green-500">{currentName}</h1>
            <p class="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">{data.requestDetails?.requestText}</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Update ครั้งล่าสุดเมื่อ {data.requestDetails?.updatedAt}</p>
            <a href="/" class="inline-flex dark:text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
        </div>   
    </div>
</div>