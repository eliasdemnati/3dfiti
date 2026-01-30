CREATE TABLE `items` (
	`id` text(16) PRIMARY KEY NOT NULL,
	`project_id` text(16),
	`iid` integer DEFAULT 0,
	`status` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` text(16) PRIMARY KEY NOT NULL,
	`nb_prints` integer DEFAULT 0,
	`name` text NOT NULL,
	`status` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch())
);
