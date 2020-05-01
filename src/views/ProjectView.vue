<template>
    <div class="bg-dark full-view">
        <h1>{{project.title}}</h1>
        <p>{{project.description}}</p>
    </div>
</template>

<script>
export default {
    name: "ProjectView",
    props: {
        project: { type: Object, required: true }
    }
};
</script>