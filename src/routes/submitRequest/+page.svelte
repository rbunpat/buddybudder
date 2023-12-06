<script lang="ts">
	import { enhance } from '$app/forms';
	import Swal from 'sweetalert2';

	export let form: any;
	export let data: any;

	export function fireSwalSuccess() {
		Swal.fire({
			title: 'Success!',
			text: 'ส่งคำขอเรียบร้อย!',
			icon: 'success',
			cancelButtonText: 'OK',
			cancelButtonColor: '#d33',
			showCancelButton: false,
			showCloseButton: true,
			allowOutsideClick: true
		});
	}

	export function fireSwalError() {
		Swal.fire({
			title: 'Error!',
			text: 'เคยส่งคำขอไปแล้ว!',
			icon: 'error',
			cancelButtonText: 'OK',
			cancelButtonColor: '#d33',
			showCancelButton: false,
			showCloseButton: true,
			allowOutsideClick: true
		});
	}

	export function fireSwalTeacherInfo() {
		Swal.fire({
			title: 'Error!',
			text: 'ครูสายรุ้งใช้เลขที่ 100 ครูเต๋า 101 ครูปุ๊ก 102',
			icon: 'info',
			cancelButtonText: 'OK',
			cancelButtonColor: '#d33',
			showCancelButton: false,
			showCloseButton: true,
			allowOutsideClick: true
		});
	}

	$: if (form?.success) {
		console.log(form.classNumber);
		fireSwalSuccess();
	}

	$: if (form?.error) {
		fireSwalError();
	}
</script>

<div class="bg-white dark:bg-gray-900 full-height">
	<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2
			class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
		>
			อยากได้อะไรจาก Buddy
		</h2>
		<p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
			บอกมาได้เลย!!
		</p>
		<form class="space-y-8" method="POST" use:enhance>
			<div>
				<label
					for="classNumber"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">เลขที่ (ครูสายรุ้งใช้เลขที่ 34 ครูเต๋า 35 ครูปุ๊ก 36)</label
				>
				<input
					id="classNumber"
					name="classNumber"
					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					type="number"
					required
				/>
			</div>
			<!-- <div>
                <label for="songTitle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Song Title</label>
                <input id="songTitle" name="songTitle" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
            </div>
            <div>
                <label for="songUrl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Song URL</label>
                <input id="songUrl" name="songUrl" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
            </div> -->
			<div class="sm:col-span-2">
				<label
					for="requestText"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">อยากได้อะไร</label
				>
				<textarea
					id="requestText"
					name="requestText"
					rows="6"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
				></textarea>
			</div>
			<button
				type="submit"
				class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>Submit Request</button
			>
		</form>
	</div>
</div>

<style>
	.full-height {
		min-height: 100vh; /* This will make the div at least the height of the viewport */
		display: flex;
		flex-direction: column;
		justify-content: center; /* This will center the content vertically */
	}
</style>
