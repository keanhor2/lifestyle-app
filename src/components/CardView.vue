<template>
    <div class="card mt-3 w-50 m-auto " >
        <div class="card-header d-flex align-items-center ">
            <slot name="header"></slot>
        </div>
        <div class="card-body m-auto p-0 ">
            <slot name="body"></slot>
        </div>
        <div class="card-footer d-flex justify-content-around bg-primary text-white">
            <slot name="footer"></slot>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>
    
</style>