/*
 *  ======== ti_drivers_config.c ========
 *  Configured TI-Drivers module definitions
 *
 *  DO NOT EDIT - This file is generated for the CC2340R5RGE
 *  by the SysConfig tool.
 */

#include <stddef.h>
#include <stdint.h>

#ifndef DeviceFamily_CC23X0R5
#define DeviceFamily_CC23X0R5
#endif

#include <ti/devices/DeviceFamily.h>

#include "ti_drivers_config.h"

/*
 *  =============================== GPIO ===============================
 */

#include <ti/drivers/GPIO.h>

/* The range of pins available on this device */
const uint_least8_t GPIO_pinLowerBound = 3;
const uint_least8_t GPIO_pinUpperBound = 24;

/*
 *  ======== gpioPinConfigs ========
 *  Array of Pin configurations
 */
GPIO_PinConfig gpioPinConfigs[GPIO_NUMBER_OF_CONFIGS] = {
    0, /* Pin is not available on this device */
    0, /* Pin is not available on this device */
    0, /* Pin is not available on this device */
    GPIO_CFG_OUTPUT_INTERNAL | GPIO_CFG_OUT_STR_MED | GPIO_CFG_OUT_LOW, /* CONFIG_PMIC_LP */
    GPIO_CFG_NO_DIR, /* DIO_4 */
    GPIO_CFG_NO_DIR, /* DIO_5 */
    /* Owned by CONFIG_I2C_0 as SCL */
    GPIO_CFG_INPUT_INTERNAL | GPIO_CFG_IN_INT_NONE | GPIO_CFG_PULL_UP_INTERNAL, /* CONFIG_GPIO_I2C_0_SCL */
    GPIO_CFG_NO_DIR, /* DIO_7 */
    /* Owned by CONFIG_I2C_0 as SDA */
    GPIO_CFG_INPUT_INTERNAL | GPIO_CFG_IN_INT_NONE | GPIO_CFG_PULL_UP_INTERNAL, /* CONFIG_GPIO_I2C_0_SDA */
    GPIO_CFG_NO_DIR, /* DIO_9 */
    GPIO_CFG_NO_DIR, /* DIO_10 */
    GPIO_CFG_NO_DIR, /* DIO_11 */
    GPIO_CFG_INPUT_INTERNAL | GPIO_CFG_IN_INT_NONE | GPIO_CFG_PULL_NONE_INTERNAL, /* CONFIG_ACCEL_INT */
    GPIO_CFG_NO_DIR, /* DIO_13 */
    GPIO_CFG_NO_DIR, /* DIO_14 */
    GPIO_CFG_NO_DIR, /* DIO_15 */
    GPIO_CFG_DO_NOT_CONFIG, /* DIO_16 */
    GPIO_CFG_DO_NOT_CONFIG, /* DIO_17 */
    GPIO_CFG_NO_DIR, /* DIO_18 */
    GPIO_CFG_NO_DIR, /* DIO_19 */
    GPIO_CFG_OUTPUT_INTERNAL | GPIO_CFG_OUT_STR_MED | GPIO_CFG_OUT_HIGH, /* CONFIG_DISPLAY_ISOLATE */
    GPIO_CFG_NO_DIR, /* DIO_21 */
    GPIO_CFG_NO_DIR, /* DIO_22 */
    GPIO_CFG_NO_DIR, /* DIO_23 */
    GPIO_CFG_NO_DIR, /* DIO_24 */
};

/*
 *  ======== gpioCallbackFunctions ========
 *  Array of callback function pointers
 *  Change at runtime with GPIO_setCallback()
 */
GPIO_CallbackFxn gpioCallbackFunctions[GPIO_NUMBER_OF_CONFIGS];

/*
 *  ======== gpioUserArgs ========
 *  Array of user argument pointers
 *  Change at runtime with GPIO_setUserArg()
 *  Get values with GPIO_getUserArg()
 */
void* gpioUserArgs[GPIO_NUMBER_OF_CONFIGS];

const uint_least8_t CONFIG_DISPLAY_ISOLATE_CONST = CONFIG_DISPLAY_ISOLATE;
const uint_least8_t CONFIG_PMIC_LP_CONST = CONFIG_PMIC_LP;
const uint_least8_t CONFIG_ACCEL_INT_CONST = CONFIG_ACCEL_INT;
const uint_least8_t CONFIG_GPIO_I2C_0_SDA_CONST = CONFIG_GPIO_I2C_0_SDA;
const uint_least8_t CONFIG_GPIO_I2C_0_SCL_CONST = CONFIG_GPIO_I2C_0_SCL;

/*
 *  ======== GPIO_config ========
 */
const GPIO_Config GPIO_config = {
    .configs = (GPIO_PinConfig *)gpioPinConfigs,
    .callbacks = (GPIO_CallbackFxn *)gpioCallbackFunctions,
    .userArgs = gpioUserArgs,
    .intPriority = (~0)
};

/*
 *  =============================== I2C ===============================
 */

#include <ti/drivers/I2C.h>
#include <ti/drivers/i2c/I2CLPF3.h>
#include <ti/drivers/Power.h>

#include <ti/devices/DeviceFamily.h>
#include DeviceFamily_constructPath(inc/hw_ints.h)
#include DeviceFamily_constructPath(inc/hw_memmap.h)

#define CONFIG_I2C_COUNT 1

/*
 *  ======== I2CLPF3_objects ========
 */
I2CLPF3_Object I2CLPF3_objects[CONFIG_I2C_COUNT];

/*
 *  ======== I2CLPF3_hwAttrs ========
 */
const I2CLPF3_HWAttrs I2CLPF3_hwAttrs[CONFIG_I2C_COUNT] = {
    /* CONFIG_I2C_0 */
    {
        .baseAddr    = I2C0_BASE,
        .powerMngrId = PowerLPF3_PERIPH_I2C0,
        .intNum      = INT_I2C0_IRQ,
        .intPriority = (~0),
        .swiPriority = 0,
        .sclPin      = CONFIG_GPIO_I2C_0_SCL,
        .sclPinMux   = GPIO_MUX_PORTCFG_PFUNC2,
        .sdaPin      = CONFIG_GPIO_I2C_0_SDA,
        .sdaPinMux   = GPIO_MUX_PORTCFG_PFUNC4
    },
};

/*
 *  ======== I2C_config ========
 */
const I2C_Config I2C_config[CONFIG_I2C_COUNT] = {
    /* CONFIG_I2C_0 */
    {
        .object      = &I2CLPF3_objects[CONFIG_I2C_0],
        .hwAttrs     = &I2CLPF3_hwAttrs[CONFIG_I2C_0]
    },
};

const uint_least8_t CONFIG_I2C_0_CONST = CONFIG_I2C_0;
const uint_least8_t I2C_count = CONFIG_I2C_COUNT;

/*
 *  =============================== Power ===============================
 */
#include <ti/drivers/Power.h>
#include "ti_drivers_config.h"
#include DeviceFamily_constructPath(driverlib/ckmd.h)
#include DeviceFamily_constructPath(driverlib/pmctl.h)

extern void PowerCC23X0_standbyPolicy(void);

const uint32_t PowerLPF3_capArrayP0 = 553648128; /* floor(8.25 * 2^26) */
const uint32_t PowerLPF3_capArrayP1 = 4697620; /* floor(0.07 * 2^26) */
const uint8_t  PowerLPF3_capArrayShift = 26;  /* shift-value to bring floating-point coefficients to fixed-point */


const PowerCC23X0_Config PowerCC23X0_config = {
    .policyInitFxn              = NULL,
    .policyFxn                  = PowerCC23X0_standbyPolicy,
    .startInitialHfxtAmpCompFxn = NULL,
};

#include <ti/drivers/Board.h>

/*
 *  ======== Board_initHook ========
 *  Perform any board-specific initialization needed at startup.  This
 *  function is declared weak to allow applications to override it if needed.
 */
void __attribute__((weak)) Board_initHook(void)
{
}

/*
 *  ======== Board_init ========
 *  Perform any initialization needed before using any board APIs
 */
void Board_init(void)
{
    /* ==== /ti/drivers/Power initialization ==== */

    Power_init();
    PowerLPF3_selectLFOSC();
    PMCTLSetVoltageRegulator(PMCTL_VOLTAGE_REGULATOR_DCDC);


    /* Set constraint to keep flash LDO on in IDLE */
    Power_setConstraint(PowerLPF3_NEED_FLASH_IN_IDLE);


    /* ==== /ti/drivers/GPIO initialization ==== */
    /* Setup GPIO module and default-initialise pins */
    GPIO_init();

    Board_initHook();
}
