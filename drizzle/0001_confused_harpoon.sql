PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_items` (
	`id` text(16) PRIMARY KEY NOT NULL,
	`project_id` text(16),
	`iid` integer DEFAULT 0,
	`status` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_items`("id", "project_id", "iid", "status", "created_at") SELECT "id", "project_id", "iid", "status", "created_at" FROM `items`;--> statement-breakpoint
DROP TABLE `items`;--> statement-breakpoint
ALTER TABLE `__new_items` RENAME TO `items`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_projects` (
	`id` text(16) PRIMARY KEY NOT NULL,
	`nb_prints` integer DEFAULT 0,
	`name` text NOT NULL,
	`status` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_projects`("id", "nb_prints", "name", "status", "created_at") SELECT "id", "nb_prints", "name", "status", "created_at" FROM `projects`;--> statement-breakpoint
DROP TABLE `projects`;--> statement-breakpoint
ALTER TABLE `__new_projects` RENAME TO `projects`;