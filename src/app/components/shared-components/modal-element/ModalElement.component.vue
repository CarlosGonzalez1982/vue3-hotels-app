<script setup lang="ts"></script>

<template>
    <transition name="modal">
        <div id="modal-template" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            default footer
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

