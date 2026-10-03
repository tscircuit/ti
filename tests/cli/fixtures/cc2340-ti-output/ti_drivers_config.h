/*
 *  ======== ti_drivers_config.h ========
 *  Configured TI-Drivers module declarations
 *
 *  The macros defines herein are intended for use by applications which
 *  directly include this header. These macros should NOT be hard coded or
 *  copied into library source code.
 *
 *  Symbols declared as const are intended for use with libraries.
 *  Library source code must extern the correct symbol--which is resolved
 *  when the application is linked.
 *
 *  DO NOT EDIT - This file is generated for the CC2340R5RGE
 *  by the SysConfig tool.
 */
#ifndef ti_drivers_config_h
#define ti_drivers_config_h

#define CONFIG_SYSCONFIG_PREVIEW

#define CONFIG_CC2340R5RGE
#ifndef DeviceFamily_CC23X0R5
#define DeviceFamily_CC23X0R5
#endif

#include <ti/devices/DeviceFamily.h>

#include <stdint.h>

/* support C++ sources */
#ifdef __cplusplus
extern "C" {
#endif


/*
 *  ======== GPIO ========
 */
#include <ti/drivers/GPIO.h>

#define GPIO_NUMBER_OF_CONFIGS 25

extern const uint_least8_t CONFIG_DISPLAY_ISOLATE_CONST;
#define CONFIG_DISPLAY_ISOLATE 20

extern const uint_least8_t CONFIG_PMIC_LP_CONST;
#define CONFIG_PMIC_LP 3

extern const uint_least8_t CONFIG_ACCEL_INT_CONST;
#define CONFIG_ACCEL_INT 12

/* Owned by CONFIG_I2C_0 as SDA */
extern const uint_least8_t CONFIG_GPIO_I2C_0_SDA_CONST;
#define CONFIG_GPIO_I2C_0_SDA 8

/* Owned by CONFIG_I2C_0 as SCL */
extern const uint_least8_t CONFIG_GPIO_I2C_0_SCL_CONST;
#define CONFIG_GPIO_I2C_0_SCL 6



/* The range of pins available on this device */
extern const uint_least8_t GPIO_pinLowerBound;
extern const uint_least8_t GPIO_pinUpperBound;

/* LEDs are active high */
#define CONFIG_GPIO_LED_ON  (1)
#define CONFIG_GPIO_LED_OFF (0)

#define CONFIG_LED_ON  (CONFIG_GPIO_LED_ON)
#define CONFIG_LED_OFF (CONFIG_GPIO_LED_OFF)


/*
 *  ======== I2C ========
 */

/*
 *  SCL: DIO_A1_AR+
 *  SDA: DIO
 */
extern const uint_least8_t              CONFIG_I2C_0_CONST;
#define CONFIG_I2C_0                    0
#define CONFIG_TI_DRIVERS_I2C_COUNT     1

/* ======== I2C Addresses and Speeds ======== */
#include <ti/drivers/I2C.h>

/* ---- CONFIG_I2C_0 I2C bus components ---- */

/* no components connected to CONFIG_I2C_0 */

/* CONFIG_I2C_0.maxBitRate configuration specified 100 kbps */
#define CONFIG_I2C_0_MAXSPEED   (100U) /* kbps */
#define CONFIG_I2C_0_MAXBITRATE ((I2C_BitRate)I2C_100kHz)


/*
 *  ======== Board_init ========
 *  Perform all required TI-Drivers initialization
 *
 *  This function should be called once at a point before any use of
 *  TI-Drivers.
 */
extern void Board_init(void);

/*
 *  ======== Board_initGeneral ========
 *  (deprecated)
 *
 *  Board_initGeneral() is defined purely for backward compatibility.
 *
 *  All new code should use Board_init() to do any required TI-Drivers
 *  initialization _and_ use <Driver>_init() for only where specific drivers
 *  are explicitly referenced by the application.  <Driver>_init() functions
 *  are idempotent.
 */
#define Board_initGeneral Board_init

#ifdef __cplusplus
}
#endif

#endif /* include guard */
