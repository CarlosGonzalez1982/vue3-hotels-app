<template>
    <div class="page__container--center item">
        <i>
            <slot name="icon"></slot>
        </i>
        <div class="details">
            <h3>
                <slot name="heading"></slot>
            </h3>
            <slot></slot>
        </div>
    </div>
</template>

<style src="./WelcomeItem.component.scss" lang="scss" scoped/>
