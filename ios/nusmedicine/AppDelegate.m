/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"nusmedicine"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  if ([UIApplication instancesRespondToSelector:@selector(registerUserNotificationSettings:)]) {
    [[UIApplication sharedApplication] registerUserNotificationSettings:[UIUserNotificationSettings settingsForTypes:UIUserNotificationTypeAlert|UIUserNotificationTypeSound categories:nil]];
  }
  
  return YES;
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
  [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0]; //Allways reset number of notifications shown at the icon
  for (UILocalNotification * notification in [[UIApplication sharedApplication] scheduledLocalNotifications]) { //Also remove all shown notifications
    if ([notification.fireDate compare:[NSDate date]] == NSOrderedAscending) {
      [[UIApplication sharedApplication] cancelLocalNotification:notification];
    }
  }
}

@end
