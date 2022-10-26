alue}
                id=${e=>e.backgroundImageOff.value}
                aria-label=${e=>e.backgroundImageOff.text}
                aria-labelledby="background-settings__background-title"
                title=${e=>e.backgroundImageOff.text}
                class="radio-button"
                data-t="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t?void 0:t.imageOffRadioButtonMetaTag}}">
                ${e=>e.backgroundImageOff.text}
                </fluent-radio>
            <fluent-radio
                value=${e=>e.backgroundImageBing.value}
                id=${e=>e.backgroundImageBing.value}
                aria-label=${e=>e.backgroundImageBing.text}
                aria-labelledby="background-settings__background-title"
                title=${e=>e.backgroundImageBing.text}
                ?disabled=${e=>e.isImageOfTheDayDisabledByPolicy}
                class="radio-button"
                data-t="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t?void 0:t.bingImageRadioButtonMetaTag}}">
                ${e=>e.backgroundImageBing.text}
            </fluent-radio>
            <fluent-radio
                value=${e=>e.backgroundImageAndVideo.value}
                id=${e=>e.backgroundImageAndVideo.value}
                aria-label=${e=>e.backgroundImageAndVideo.text}
                aria-labelledby="background-settings__background-title"
                title=${e=>e.backgroundImageAndVideo.text}
                ?disabled=${e=>e.isImageOfTheDayDisabledByPolicy}
                class="radio-button"
                data-t="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t?void 0:t.imageAndVideoRadioButtonMetaTag}}"
            >
                ${e=>e.backgroundImageAndVideo.text}
            </fluent-radio>
            <fluent-radio
                value=${e=>e.backgroundImageCustom.value}
                id=${e=>e.backgroundImageCustom.value}
                aria-label=${e=>e.backgroundImageCustom.text}
                aria-labelledby="background-settings__background-title"
                title=${e=>e.backgroundImageCustom.text}
                ?disabled=${e=>e.isCustomBackgroundImageDisabledByPolicy}
                class="radio-button"
                data-t="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t?void 0:t.customImageRadioButtonMetaTag}}">
                ${e=>e.backgroundImageCustom.text}
            </fluent-radio>
            ${(0,ve.g)((e=>e.backgroundMode==N.HX.custom),Pe)}
            <fluent-radio
                value=${e=>e.backgroundImageTheme.value}
                id=${e=>e.backgroundImageTheme.value}
                aria-label=${e=>e.backgroundImageTheme.text}
                aria-labelledby="background-settings__background-title"
                title=${e=>e.backgroundImageTheme.text}
                ?disabled=${e=>e.isCustomBackgroundImageDisabledByPolicy}
                class="radio-button"
                data-t="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t?void 0:t.themeRadioButtonMetaTag}}">
                ${e=>e.backgroundImageTheme.text}
            </fluent-radio>
            ${(0,ve.g)((e=>e.backgroundMode==N.HX.theme),Oe)}
        </fluent-radio-group>
    </div>
`;var Ve=i(18864);const Re=fe.d`
<fluent-divider class="divider-margin" slot="divider"></fluent-divider>
    <div class="toggle-custom">
        <fluent-switch
            checked=${e=>e.greetingEnabled}
            aria-checked="${e=>e.greetingEnabled}"
            @change=${(e,t)=>e.updateToggle(t.event,he.greeting)}
             class="${e=>e.greetingEnabled?"toggle-fluent-switch toggle-fluent-switch-check":"toggle-fluent-switch"}"
            data-t="${e=>{var t;return null===(t=e.telemetryContext)||void 0===t?void 0:t.greetingToggleMetaT