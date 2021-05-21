import { LightningElement, track, api } from 'lwc';

const TABLE_STYLE = "height: 400px; width:99%";

const ACTION_ICONS = [
    { 'iconName': 'action:add_contact', 'id': 'action:add_contact' },
    { 'iconName': 'action:add_file', 'id': 'action:add_file' },
    { 'iconName': 'action:add_photo_video', 'id': 'action:add_photo_video' },
    { 'iconName': 'action:add_relationship', 'id': 'action:add_relationship' },
    { 'iconName': 'action:announcement', 'id': 'action:announcement' },
    { 'iconName': 'action:apex', 'id': 'action:apex' },
    { 'iconName': 'action:approval', 'id': 'action:approval' },
    { 'iconName': 'action:back', 'id': 'action:back' },
    { 'iconName': 'action:bug', 'id': 'action:bug' },
    { 'iconName': 'action:call', 'id': 'action:call' },
    { 'iconName': 'action:canvas', 'id': 'action:canvas' },
    { 'iconName': 'action:change_owner', 'id': 'action:change_owner' },
    { 'iconName': 'action:change_record_type', 'id': 'action:change_record_type' },
    { 'iconName': 'action:check', 'id': 'action:check' },
    { 'iconName': 'action:clone', 'id': 'action:clone' },
    { 'iconName': 'action:close', 'id': 'action:close' },
    { 'iconName': 'action:defer', 'id': 'action:defer' },
    { 'iconName': 'action:delete', 'id': 'action:delete' },
    { 'iconName': 'action:description', 'id': 'action:description' },
    { 'iconName': 'action:dial_in', 'id': 'action:dial_in' },
    { 'iconName': 'action:download', 'id': 'action:download' },
    { 'iconName': 'action:edit_groups', 'id': 'action:edit_groups' },
    { 'iconName': 'action:edit_relationship', 'id': 'action:edit_relationship' },
    { 'iconName': 'action:edit', 'id': 'action:edit' },
    { 'iconName': 'action:email', 'id': 'action:email' },
    { 'iconName': 'action:fallback', 'id': 'action:fallback' },
    { 'iconName': 'action:filter', 'id': 'action:filter' },
    { 'iconName': 'action:flow', 'id': 'action:flow' },
    { 'iconName': 'action:follow', 'id': 'action:follow' },
    { 'iconName': 'action:following', 'id': 'action:following' },
    { 'iconName': 'action:freeze_user', 'id': 'action:freeze_user' },
    { 'iconName': 'action:goal', 'id': 'action:goal' },
    { 'iconName': 'action:google_news', 'id': 'action:google_news' },
    { 'iconName': 'action:info', 'id': 'action:info' },
    { 'iconName': 'action:join_group', 'id': 'action:join_group' },
    { 'iconName': 'action:lead_convert', 'id': 'action:lead_convert' },
    { 'iconName': 'action:leave_group', 'id': 'action:leave_group' },
    { 'iconName': 'action:log_a_call', 'id': 'action:log_a_call' },
    { 'iconName': 'action:log_event', 'id': 'action:log_event' },
    { 'iconName': 'action:manage_perm_sets', 'id': 'action:manage_perm_sets' },
    { 'iconName': 'action:map', 'id': 'action:map' },
    { 'iconName': 'action:more', 'id': 'action:more' },
    { 'iconName': 'action:new_account', 'id': 'action:new_account' },
    { 'iconName': 'action:new_campaign', 'id': 'action:new_campaign' },
    { 'iconName': 'action:new_case', 'id': 'action:new_case' },
    { 'iconName': 'action:new_child_case', 'id': 'action:new_child_case' },
    { 'iconName': 'action:new_contact', 'id': 'action:new_contact' },
    { 'iconName': 'action:new_event', 'id': 'action:new_event' },
    { 'iconName': 'action:new_group', 'id': 'action:new_group' },
    { 'iconName': 'action:new_lead', 'id': 'action:new_lead' },
    { 'iconName': 'action:new_note', 'id': 'action:new_note' },
    { 'iconName': 'action:new_notebook', 'id': 'action:new_notebook' },
    { 'iconName': 'action:new_opportunity', 'id': 'action:new_opportunity' },
    { 'iconName': 'action:new_person_account', 'id': 'action:new_person_account' },
    { 'iconName': 'action:new_task', 'id': 'action:new_task' },
    { 'iconName': 'action:new', 'id': 'action:new' },
    { 'iconName': 'action:password_unlock', 'id': 'action:password_unlock' },
    { 'iconName': 'action:preview', 'id': 'action:preview' },
    { 'iconName': 'action:priority', 'id': 'action:priority' },
    { 'iconName': 'action:question_post_action', 'id': 'action:question_post_action' },
    { 'iconName': 'action:quote', 'id': 'action:quote' },
    { 'iconName': 'action:recall', 'id': 'action:recall' },
    { 'iconName': 'action:record', 'id': 'action:record' },
    { 'iconName': 'action:refresh', 'id': 'action:refresh' },
    { 'iconName': 'action:reject', 'id': 'action:reject' },
    { 'iconName': 'action:remove_relationship', 'id': 'action:remove_relationship' },
    { 'iconName': 'action:remove', 'id': 'action:remove' },
    { 'iconName': 'action:reset_password', 'id': 'action:reset_password' },
    { 'iconName': 'action:script', 'id': 'action:script' },
    { 'iconName': 'action:share_file', 'id': 'action:share_file' },
    { 'iconName': 'action:share_link', 'id': 'action:share_link' },
    { 'iconName': 'action:share_poll', 'id': 'action:share_poll' },
    { 'iconName': 'action:share_post', 'id': 'action:share_post' },
    { 'iconName': 'action:share_thanks', 'id': 'action:share_thanks' },
    { 'iconName': 'action:share', 'id': 'action:share' },
    { 'iconName': 'action:sort', 'id': 'action:sort' },
    { 'iconName': 'action:submit_for_approval', 'id': 'action:submit_for_approval' },
    { 'iconName': 'action:update_status', 'id': 'action:update_status' },
    { 'iconName': 'action:update', 'id': 'action:update' },
    { 'iconName': 'action:upload', 'id': 'action:upload' },
    { 'iconName': 'action:user_activation', 'id': 'action:user_activation' },
    { 'iconName': 'action:user', 'id': 'action:user' },
    { 'iconName': 'action:view_relationship', 'id': 'action:view_relationship' },
    { 'iconName': 'action:web_link', 'id': 'action:web_link' }
];

const CUSTOM_ICONS = [{ 'iconName': 'custom:custom1', 'id': 'custom:custom1' },
{ 'iconName': 'custom:custom2', 'id': 'custom:custom2' },
{ 'iconName': 'custom:custom3', 'id': 'custom:custom3' },
{ 'iconName': 'custom:custom4', 'id': 'custom:custom4' },
{ 'iconName': 'custom:custom5', 'id': 'custom:custom5' },
{ 'iconName': 'custom:custom6', 'id': 'custom:custom6' },
{ 'iconName': 'custom:custom7', 'id': 'custom:custom7' },
{ 'iconName': 'custom:custom8', 'id': 'custom:custom8' },
{ 'iconName': 'custom:custom9', 'id': 'custom:custom9' },
{ 'iconName': 'custom:custom10', 'id': 'custom:custom10' },
{ 'iconName': 'custom:custom11', 'id': 'custom:custom11' },
{ 'iconName': 'custom:custom12', 'id': 'custom:custom12' },
{ 'iconName': 'custom:custom13', 'id': 'custom:custom13' },
{ 'iconName': 'custom:custom14', 'id': 'custom:custom14' },
{ 'iconName': 'custom:custom15', 'id': 'custom:custom15' },
{ 'iconName': 'custom:custom16', 'id': 'custom:custom16' },
{ 'iconName': 'custom:custom17', 'id': 'custom:custom17' },
{ 'iconName': 'custom:custom18', 'id': 'custom:custom18' },
{ 'iconName': 'custom:custom19', 'id': 'custom:custom19' },
{ 'iconName': 'custom:custom20', 'id': 'custom:custom20' },
{ 'iconName': 'custom:custom21', 'id': 'custom:custom21' },
{ 'iconName': 'custom:custom22', 'id': 'custom:custom22' },
{ 'iconName': 'custom:custom23', 'id': 'custom:custom23' },
{ 'iconName': 'custom:custom24', 'id': 'custom:custom24' },
{ 'iconName': 'custom:custom25', 'id': 'custom:custom25' },
{ 'iconName': 'custom:custom26', 'id': 'custom:custom26' },
{ 'iconName': 'custom:custom27', 'id': 'custom:custom27' },
{ 'iconName': 'custom:custom28', 'id': 'custom:custom28' },
{ 'iconName': 'custom:custom29', 'id': 'custom:custom29' },
{ 'iconName': 'custom:custom30', 'id': 'custom:custom30' },
{ 'iconName': 'custom:custom31', 'id': 'custom:custom31' },
{ 'iconName': 'custom:custom32', 'id': 'custom:custom32' },
{ 'iconName': 'custom:custom33', 'id': 'custom:custom33' },
{ 'iconName': 'custom:custom34', 'id': 'custom:custom34' },
{ 'iconName': 'custom:custom35', 'id': 'custom:custom35' },
{ 'iconName': 'custom:custom36', 'id': 'custom:custom36' },
{ 'iconName': 'custom:custom37', 'id': 'custom:custom37' },
{ 'iconName': 'custom:custom38', 'id': 'custom:custom38' },
{ 'iconName': 'custom:custom39', 'id': 'custom:custom39' },
{ 'iconName': 'custom:custom40', 'id': 'custom:custom40' },
{ 'iconName': 'custom:custom41', 'id': 'custom:custom41' },
{ 'iconName': 'custom:custom42', 'id': 'custom:custom42' },
{ 'iconName': 'custom:custom43', 'id': 'custom:custom43' },
{ 'iconName': 'custom:custom44', 'id': 'custom:custom44' },
{ 'iconName': 'custom:custom45', 'id': 'custom:custom45' },
{ 'iconName': 'custom:custom46', 'id': 'custom:custom46' },
{ 'iconName': 'custom:custom47', 'id': 'custom:custom47' },
{ 'iconName': 'custom:custom48', 'id': 'custom:custom48' },
{ 'iconName': 'custom:custom49', 'id': 'custom:custom49' },
{ 'iconName': 'custom:custom50', 'id': 'custom:custom50' },
{ 'iconName': 'custom:custom51', 'id': 'custom:custom51' },
{ 'iconName': 'custom:custom52', 'id': 'custom:custom52' },
{ 'iconName': 'custom:custom53', 'id': 'custom:custom53' },
{ 'iconName': 'custom:custom54', 'id': 'custom:custom54' },
{ 'iconName': 'custom:custom55', 'id': 'custom:custom55' },
{ 'iconName': 'custom:custom56', 'id': 'custom:custom56' },
{ 'iconName': 'custom:custom57', 'id': 'custom:custom57' },
{ 'iconName': 'custom:custom58', 'id': 'custom:custom58' },
{ 'iconName': 'custom:custom59', 'id': 'custom:custom59' },
{ 'iconName': 'custom:custom60', 'id': 'custom:custom60' },
{ 'iconName': 'custom:custom61', 'id': 'custom:custom61' },
{ 'iconName': 'custom:custom62', 'id': 'custom:custom62' },
{ 'iconName': 'custom:custom63', 'id': 'custom:custom63' },
{ 'iconName': 'custom:custom64', 'id': 'custom:custom64' },
{ 'iconName': 'custom:custom65', 'id': 'custom:custom65' },
{ 'iconName': 'custom:custom66', 'id': 'custom:custom66' },
{ 'iconName': 'custom:custom67', 'id': 'custom:custom67' },
{ 'iconName': 'custom:custom68', 'id': 'custom:custom68' },
{ 'iconName': 'custom:custom69', 'id': 'custom:custom69' },
{ 'iconName': 'custom:custom70', 'id': 'custom:custom70' },
{ 'iconName': 'custom:custom71', 'id': 'custom:custom71' },
{ 'iconName': 'custom:custom72', 'id': 'custom:custom72' },
{ 'iconName': 'custom:custom73', 'id': 'custom:custom73' },
{ 'iconName': 'custom:custom74', 'id': 'custom:custom74' },
{ 'iconName': 'custom:custom75', 'id': 'custom:custom75' },
{ 'iconName': 'custom:custom76', 'id': 'custom:custom76' },
{ 'iconName': 'custom:custom77', 'id': 'custom:custom77' },
{ 'iconName': 'custom:custom78', 'id': 'custom:custom78' },
{ 'iconName': 'custom:custom79', 'id': 'custom:custom79' },
{ 'iconName': 'custom:custom80', 'id': 'custom:custom80' },
{ 'iconName': 'custom:custom81', 'id': 'custom:custom81' },
{ 'iconName': 'custom:custom82', 'id': 'custom:custom82' },
{ 'iconName': 'custom:custom83', 'id': 'custom:custom83' },
{ 'iconName': 'custom:custom84', 'id': 'custom:custom84' },
{ 'iconName': 'custom:custom85', 'id': 'custom:custom85' },
{ 'iconName': 'custom:custom86', 'id': 'custom:custom86' },
{ 'iconName': 'custom:custom87', 'id': 'custom:custom87' },
{ 'iconName': 'custom:custom88', 'id': 'custom:custom88' },
{ 'iconName': 'custom:custom89', 'id': 'custom:custom89' },
{ 'iconName': 'custom:custom90', 'id': 'custom:custom90' },
{ 'iconName': 'custom:custom91', 'id': 'custom:custom91' },
{ 'iconName': 'custom:custom92', 'id': 'custom:custom92' },
{ 'iconName': 'custom:custom93', 'id': 'custom:custom93' },
{ 'iconName': 'custom:custom94', 'id': 'custom:custom94' },
{ 'iconName': 'custom:custom95', 'id': 'custom:custom95' },
{ 'iconName': 'custom:custom96', 'id': 'custom:custom96' },
{ 'iconName': 'custom:custom97', 'id': 'custom:custom97' },
{ 'iconName': 'custom:custom98', 'id': 'custom:custom98' },
{ 'iconName': 'custom:custom99', 'id': 'custom:custom99' },
{ 'iconName': 'custom:custom100', 'id': 'custom:custom100' },
{ 'iconName': 'custom:custom101', 'id': 'custom:custom101' },
{ 'iconName': 'custom:custom102', 'id': 'custom:custom102' },
{ 'iconName': 'custom:custom103', 'id': 'custom:custom103' },
{ 'iconName': 'custom:custom104', 'id': 'custom:custom104' },
{ 'iconName': 'custom:custom105', 'id': 'custom:custom105' },
{ 'iconName': 'custom:custom106', 'id': 'custom:custom106' },
{ 'iconName': 'custom:custom107', 'id': 'custom:custom107' },
{ 'iconName': 'custom:custom108', 'id': 'custom:custom108' },
{ 'iconName': 'custom:custom109', 'id': 'custom:custom109' },
{ 'iconName': 'custom:custom110', 'id': 'custom:custom110' },
{ 'iconName': 'custom:custom111', 'id': 'custom:custom111' },
{ 'iconName': 'custom:custom112', 'id': 'custom:custom112' },
{ 'iconName': 'custom:custom113', 'id': 'custom:custom113' }
]

const STANDARD_ICONS = [
    { 'iconName': 'standard:account', 'id': 'standard:account' },
    { 'iconName': 'standard:action_list_component', 'id': 'standard:action_list_component' },
    { 'iconName': 'standard:actions_and_buttons', 'id': 'standard:actions_and_buttons' },
    { 'iconName': 'standard:address', 'id': 'standard:address' },
    { 'iconName': 'standard:agent_session', 'id': 'standard:agent_session' },
    { 'iconName': 'standard:all', 'id': 'standard:all' },
    { 'iconName': 'standard:announcement', 'id': 'standard:announcement' },
    { 'iconName': 'standard:answer_best', 'id': 'standard:answer_best' },
    { 'iconName': 'standard:answer_private', 'id': 'standard:answer_private' },
    { 'iconName': 'standard:answer_public', 'id': 'standard:answer_public' },
    { 'iconName': 'standard:apex_plugin', 'id': 'standard:apex_plugin' },
    { 'iconName': 'standard:apex', 'id': 'standard:apex' },
    { 'iconName': 'standard:app', 'id': 'standard:app' },
    { 'iconName': 'standard:approval', 'id': 'standard:approval' },
    { 'iconName': 'standard:apps_admin', 'id': 'standard:apps_admin' },
    { 'iconName': 'standard:apps', 'id': 'standard:apps' },
    { 'iconName': 'standard:article', 'id': 'standard:article' },
    { 'iconName': 'standard:asset_relationship', 'id': 'standard:asset_relationship' },
    { 'iconName': 'standard:assigned_resource', 'id': 'standard:assigned_resource' },
    { 'iconName': 'standard:assignment', 'id': 'standard:assignment' },
    { 'iconName': 'standard:avatar_loading', 'id': 'standard:avatar_loading' },
    { 'iconName': 'standard:avatar', 'id': 'standard:avatar' },
    { 'iconName': 'standard:bot_training', 'id': 'standard:bot_training' },
    { 'iconName': 'standard:bot', 'id': 'standard:bot' },
    { 'iconName': 'standard:branch_merge', 'id': 'standard:branch_merge' },
    { 'iconName': 'standard:brand', 'id': 'standard:brand' },
    { 'iconName': 'standard:business_hours', 'id': 'standard:business_hours' },
    { 'iconName': 'standard:buyer_account', 'id': 'standard:buyer_account' },
    { 'iconName': 'standard:buyer_group', 'id': 'standard:buyer_group' },
    { 'iconName': 'standard:calibration', 'id': 'standard:calibration' },
    { 'iconName': 'standard:call_history', 'id': 'standard:call_history' },
    { 'iconName': 'standard:call', 'id': 'standard:call' },
    { 'iconName': 'standard:campaign_members', 'id': 'standard:campaign_members' },
    { 'iconName': 'standard:campaign', 'id': 'standard:campaign' },
    { 'iconName': 'standard:canvas', 'id': 'standard:canvas' },
    { 'iconName': 'standard:carousel', 'id': 'standard:carousel' },
    { 'iconName': 'standard:case_change_status', 'id': 'standard:case_change_status' },
    { 'iconName': 'standard:case_comment', 'id': 'standard:case_comment' },
    { 'iconName': 'standard:case_email', 'id': 'standard:case_email' },
    { 'iconName': 'standard:case_log_a_call', 'id': 'standard:case_log_a_call' },
    { 'iconName': 'standard:case_milestone', 'id': 'standard:case_milestone' },
    { 'iconName': 'standard:case_transcript', 'id': 'standard:case_transcript' },
    { 'iconName': 'standard:case', 'id': 'standard:case' },
    { 'iconName': 'standard:catalog', 'id': 'standard:catalog' },
    { 'iconName': 'standard:category', 'id': 'standard:category' },
    { 'iconName': 'standard:channel_program_history', 'id': 'standard:channel_program_history' },
    { 'iconName': 'standard:channel_program_levels', 'id': 'standard:channel_program_levels' },
    { 'iconName': 'standard:channel_program_members', 'id': 'standard:channel_program_members' },
    { 'iconName': 'standard:channel_programs', 'id': 'standard:channel_programs' },
    { 'iconName': 'standard:chart', 'id': 'standard:chart' },
    { 'iconName': 'standard:choice', 'id': 'standard:choice' },
    { 'iconName': 'standard:client', 'id': 'standard:client' },
    { 'iconName': 'standard:cms', 'id': 'standard:cms' },
    { 'iconName': 'standard:coaching', 'id': 'standard:coaching' },
    { 'iconName': 'standard:code_playground', 'id': 'standard:code_playground' },
    { 'iconName': 'standard:collection_variable', 'id': 'standard:collection_variable' },
    { 'iconName': 'standard:connected_apps', 'id': 'standard:connected_apps' },
    { 'iconName': 'standard:constant', 'id': 'standard:constant' },
    { 'iconName': 'standard:contact_list', 'id': 'standard:contact_list' },
    { 'iconName': 'standard:contact_request', 'id': 'standard:contact_request' },
    { 'iconName': 'standard:contact', 'id': 'standard:contact' },
    { 'iconName': 'standard:contract_line_item', 'id': 'standard:contract_line_item' },
    { 'iconName': 'standard:contract', 'id': 'standard:contract' },
    { 'iconName': 'standard:currency_input', 'id': 'standard:currency_input' },
    { 'iconName': 'standard:currency', 'id': 'standard:currency' },
    { 'iconName': 'standard:custom_notification', 'id': 'standard:custom_notification' },
    { 'iconName': 'standard:custom', 'id': 'standard:custom' },
    { 'iconName': 'standard:customer_360', 'id': 'standard:customer_360' },
    { 'iconName': 'standard:customer_portal_users', 'id': 'standard:customer_portal_users' },
    { 'iconName': 'standard:customers', 'id': 'standard:customers' },
    { 'iconName': 'standard:dashboard_ea', 'id': 'standard:dashboard_ea' },
    { 'iconName': 'standard:dashboard', 'id': 'standard:dashboard' },
    { 'iconName': 'standard:data_integration_hub', 'id': 'standard:data_integration_hub' },
    { 'iconName': 'standard:datadotcom', 'id': 'standard:datadotcom' },
    { 'iconName': 'standard:dataset', 'id': 'standard:dataset' },
    { 'iconName': 'standard:date_input', 'id': 'standard:date_input' },
    { 'iconName': 'standard:date_time', 'id': 'standard:date_time' },
    { 'iconName': 'standard:decision', 'id': 'standard:decision' },
    { 'iconName': 'standard:default', 'id': 'standard:default' },
    { 'iconName': 'standard:delegated_account', 'id': 'standard:delegated_account' },
    { 'iconName': 'standard:display_rich_text', 'id': 'standard:display_rich_text' },
    { 'iconName': 'standard:display_text', 'id': 'standard:display_text' },
    { 'iconName': 'standard:document', 'id': 'standard:document' },
    { 'iconName': 'standard:drafts', 'id': 'standard:drafts' },
    { 'iconName': 'standard:dynamic_record_choice', 'id': 'standard:dynamic_record_choice' },
    { 'iconName': 'standard:education', 'id': 'standard:education' },
    { 'iconName': 'standard:email_chatter', 'id': 'standard:email_chatter' },
    { 'iconName': 'standard:email', 'id': 'standard:email' },
    { 'iconName': 'standard:empty', 'id': 'standard:empty' },
    { 'iconName': 'standard:endorsement', 'id': 'standard:endorsement' },
    { 'iconName': 'standard:entitlement_policy', 'id': 'standard:entitlement_policy' },
    { 'iconName': 'standard:entitlement_process', 'id': 'standard:entitlement_process' },
    { 'iconName': 'standard:entitlement_template', 'id': 'standard:entitlement_template' },
    { 'iconName': 'standard:entitlement', 'id': 'standard:entitlement' },
    { 'iconName': 'standard:entity_milestone', 'id': 'standard:entity_milestone' },
    { 'iconName': 'standard:entity', 'id': 'standard:entity' },
    { 'iconName': 'standard:environment_hub', 'id': 'standard:environment_hub' },
    { 'iconName': 'standard:event', 'id': 'standard:event' },
    { 'iconName': 'standard:events', 'id': 'standard:events' },
    { 'iconName': 'standard:feed', 'id': 'standard:feed' },
    { 'iconName': 'standard:feedback', 'id': 'standard:feedback' },
    { 'iconName': 'standard:file', 'id': 'standard:file' },
    { 'iconName': 'standard:filter', 'id': 'standard:filter' },
    { 'iconName': 'standard:first_non_empty', 'id': 'standard:first_non_empty' },
    { 'iconName': 'standard:flow', 'id': 'standard:flow' },
    { 'iconName': 'standard:folder', 'id': 'standard:folder' },
    { 'iconName': 'standard:forecasts', 'id': 'standard:forecasts' },
    { 'iconName': 'standard:formula', 'id': 'standard:formula' },
    { 'iconName': 'standard:fulfillment_order', 'id': 'standard:fulfillment_order' },
    { 'iconName': 'standard:generic_loading', 'id': 'standard:generic_loading' },
    { 'iconName': 'standard:global_constant', 'id': 'standard:global_constant' },
    { 'iconName': 'standard:goals', 'id': 'standard:goals' },
    { 'iconName': 'standard:group_loading', 'id': 'standard:group_loading' },
    { 'iconName': 'standard:groups', 'id': 'standard:groups' },
    { 'iconName': 'standard:hierarchy', 'id': 'standard:hierarchy' },
    { 'iconName': 'standard:high_velocity_sales', 'id': 'standard:high_velocity_sales' },
    { 'iconName': 'standard:home', 'id': 'standard:home' },
    { 'iconName': 'standard:household', 'id': 'standard:household' },
    { 'iconName': 'standard:individual', 'id': 'standard:individual' },
    { 'iconName': 'standard:insights', 'id': 'standard:insights' },
    { 'iconName': 'standard:instore_locations', 'id': 'standard:instore_locations' },
    { 'iconName': 'standard:investment_account', 'id': 'standard:investment_account' },
    { 'iconName': 'standard:invocable_action', 'id': 'standard:invocable_action' },
    { 'iconName': 'standard:iot_context', 'id': 'standard:iot_context' },
    { 'iconName': 'standard:iot_orchestrations', 'id': 'standard:iot_orchestrations' },
    { 'iconName': 'standard:javascript_button', 'id': 'standard:javascript_button' },
    { 'iconName': 'standard:job_profile', 'id': 'standard:job_profile' },
    { 'iconName': 'standard:kanban', 'id': 'standard:kanban' },
    { 'iconName': 'standard:knowledge', 'id': 'standard:knowledge' },
    { 'iconName': 'standard:lead_insights', 'id': 'standard:lead_insights' },
    { 'iconName': 'standard:lead_list', 'id': 'standard:lead_list' },
    { 'iconName': 'standard:lead', 'id': 'standard:lead' },
    { 'iconName': 'standard:letterhead', 'id': 'standard:letterhead' },
    { 'iconName': 'standard:lightning_component', 'id': 'standard:lightning_component' },
    { 'iconName': 'standard:lightning_usage', 'id': 'standard:lightning_usage' },
    { 'iconName': 'standard:link', 'id': 'standard:link' },
    { 'iconName': 'standard:list_email', 'id': 'standard:list_email' },
    { 'iconName': 'standard:live_chat_visitor', 'id': 'standard:live_chat_visitor' },
    { 'iconName': 'standard:live_chat', 'id': 'standard:live_chat' },
    { 'iconName': 'standard:location', 'id': 'standard:location' },
    { 'iconName': 'standard:log_a_call', 'id': 'standard:log_a_call' },
    { 'iconName': 'standard:logging', 'id': 'standard:logging' },
    { 'iconName': 'standard:loop', 'id': 'standard:loop' },
    { 'iconName': 'standard:macros', 'id': 'standard:macros' },
    { 'iconName': 'standard:maintenance_asset', 'id': 'standard:maintenance_asset' },
    { 'iconName': 'standard:maintenance_plan', 'id': 'standard:maintenance_plan' },
    { 'iconName': 'standard:marketing_actions', 'id': 'standard:marketing_actions' },
    { 'iconName': 'standard:merge', 'id': 'standard:merge' },
    { 'iconName': 'standard:messaging_conversation', 'id': 'standard:messaging_conversation' },
    { 'iconName': 'standard:messaging_session', 'id': 'standard:messaging_session' },
    { 'iconName': 'standard:messaging_user', 'id': 'standard:messaging_user' },
    { 'iconName': 'standard:metrics', 'id': 'standard:metrics' },
    { 'iconName': 'standard:multi_picklist', 'id': 'standard:multi_picklist' },
    { 'iconName': 'standard:multi_select_checkbox', 'id': 'standard:multi_select_checkbox' },
    { 'iconName': 'standard:news', 'id': 'standard:news' },
    { 'iconName': 'standard:note', 'id': 'standard:note' },
    { 'iconName': 'standard:number_input', 'id': 'standard:number_input' },
    { 'iconName': 'standard:omni_supervisor', 'id': 'standard:omni_supervisor' },
    { 'iconName': 'standard:operating_hours', 'id': 'standard:operating_hours' },
    { 'iconName': 'standard:opportunity_contact_role', 'id': 'standard:opportunity_contact_role' },
    { 'iconName': 'standard:opportunity_splits', 'id': 'standard:opportunity_splits' },
    { 'iconName': 'standard:opportunity', 'id': 'standard:opportunity' },
    { 'iconName': 'standard:order_item', 'id': 'standard:order_item' },
    { 'iconName': 'standard:orders', 'id': 'standard:orders' },
    { 'iconName': 'standard:outcome', 'id': 'standard:outcome' },
    { 'iconName': 'standard:output', 'id': 'standard:output' },
    { 'iconName': 'standard:partner_fund_allocation', 'id': 'standard:partner_fund_allocation' },
    { 'iconName': 'standard:partner_fund_claim', 'id': 'standard:partner_fund_claim' },
    { 'iconName': 'standard:partner_fund_request', 'id': 'standard:partner_fund_request' },
    { 'iconName': 'standard:partner_marketing_budget', 'id': 'standard:partner_marketing_budget' },
    { 'iconName': 'standard:partners', 'id': 'standard:partners' },
    { 'iconName': 'standard:password', 'id': 'standard:password' },
    { 'iconName': 'standard:past_chat', 'id': 'standard:past_chat' },
    { 'iconName': 'standard:people', 'id': 'standard:people' },
    { 'iconName': 'standard:performance', 'id': 'standard:performance' },
    { 'iconName': 'standard:person_account', 'id': 'standard:person_account' },
    { 'iconName': 'standard:photo', 'id': 'standard:photo' },
    { 'iconName': 'standard:picklist_choice', 'id': 'standard:picklist_choice' },
    { 'iconName': 'standard:picklist_type', 'id': 'standard:picklist_type' },
    { 'iconName': 'standard:planogram', 'id': 'standard:planogram' },
    { 'iconName': 'standard:poll', 'id': 'standard:poll' },
    { 'iconName': 'standard:portal_roles_and_subordinates', 'id': 'standard:portal_roles_and_subordinates' },
    { 'iconName': 'standard:portal_roles', 'id': 'standard:portal_roles' },
    { 'iconName': 'standard:portal', 'id': 'standard:portal' },
    { 'iconName': 'standard:post', 'id': 'standard:post' },
    { 'iconName': 'standard:pricebook', 'id': 'standard:pricebook' },
    { 'iconName': 'standard:process', 'id': 'standard:process' },
    { 'iconName': 'standard:product_consumed', 'id': 'standard:product_consumed' },
    { 'iconName': 'standard:product_item_transaction', 'id': 'standard:product_item_transaction' },
    { 'iconName': 'standard:product_item', 'id': 'standard:product_item' },
    { 'iconName': 'standard:product_request_line_item', 'id': 'standard:product_request_line_item' },
    { 'iconName': 'standard:product_request', 'id': 'standard:product_request' },
    { 'iconName': 'standard:product_required', 'id': 'standard:product_required' },
    { 'iconName': 'standard:product_transfer', 'id': 'standard:product_transfer' },
    { 'iconName': 'standard:product', 'id': 'standard:product' },
    { 'iconName': 'standard:proposition', 'id': 'standard:proposition' },
    { 'iconName': 'standard:question_best', 'id': 'standard:question_best' },
    { 'iconName': 'standard:question_feed', 'id': 'standard:question_feed' },
    { 'iconName': 'standard:queue', 'id': 'standard:queue' },
    { 'iconName': 'standard:quick_text', 'id': 'standard:quick_text' },
    { 'iconName': 'standard:quip_sheet', 'id': 'standard:quip_sheet' },
    { 'iconName': 'standard:quip', 'id': 'standard:quip' },
    { 'iconName': 'standard:quotes', 'id': 'standard:quotes' },
    { 'iconName': 'standard:radio_button', 'id': 'standard:radio_button' },
    { 'iconName': 'standard:read_receipts', 'id': 'standard:read_receipts' },
    { 'iconName': 'standard:recent', 'id': 'standard:recent' },
    { 'iconName': 'standard:record_create', 'id': 'standard:record_create' },
    { 'iconName': 'standard:record_delete', 'id': 'standard:record_delete' },
    { 'iconName': 'standard:record_lookup', 'id': 'standard:record_lookup' },
    { 'iconName': 'standard:record_update', 'id': 'standard:record_update' },
    { 'iconName': 'standard:record', 'id': 'standard:record' },
    { 'iconName': 'standard:recycle_bin', 'id': 'standard:recycle_bin' },
    { 'iconName': 'standard:related_list', 'id': 'standard:related_list' },
    { 'iconName': 'standard:relationship', 'id': 'standard:relationship' },
    { 'iconName': 'standard:report', 'id': 'standard:report' },
    { 'iconName': 'standard:resource_absence', 'id': 'standard:resource_absence' },
    { 'iconName': 'standard:resource_capacity', 'id': 'standard:resource_capacity' },
    { 'iconName': 'standard:resource_preference', 'id': 'standard:resource_preference' },
    { 'iconName': 'standard:resource_skill', 'id': 'standard:resource_skill' },
    { 'iconName': 'standard:return_order_line_item', 'id': 'standard:return_order_line_item' },
    { 'iconName': 'standard:return_order', 'id': 'standard:return_order' },
    { 'iconName': 'standard:reward', 'id': 'standard:reward' },
    { 'iconName': 'standard:rtc_presence', 'id': 'standard:rtc_presence' },
    { 'iconName': 'standard:sales_cadence_target', 'id': 'standard:sales_cadence_target' },
    { 'iconName': 'standard:sales_cadence', 'id': 'standard:sales_cadence' },
    { 'iconName': 'standard:sales_channel', 'id': 'standard:sales_channel' },
    { 'iconName': 'standard:sales_path', 'id': 'standard:sales_path' },
    { 'iconName': 'standard:scan_card', 'id': 'standard:scan_card' },
    { 'iconName': 'standard:screen', 'id': 'standard:screen' },
    { 'iconName': 'standard:search', 'id': 'standard:search' },
    { 'iconName': 'standard:service_appointment_capacity_usage', 'id': 'standard:service_appointment_capacity_usage' },
    { 'iconName': 'standard:service_appointment', 'id': 'standard:service_appointment' },
    { 'iconName': 'standard:service_contract', 'id': 'standard:service_contract' },
    { 'iconName': 'standard:service_crew_member', 'id': 'standard:service_crew_member' },
    { 'iconName': 'standard:service_crew', 'id': 'standard:service_crew' },
    { 'iconName': 'standard:service_report', 'id': 'standard:service_report' },
    { 'iconName': 'standard:service_resource', 'id': 'standard:service_resource' },
    { 'iconName': 'standard:service_territory_location', 'id': 'standard:service_territory_location' },
    { 'iconName': 'standard:service_territory_member', 'id': 'standard:service_territory_member' },
    { 'iconName': 'standard:service_territory', 'id': 'standard:service_territory' },
    { 'iconName': 'standard:shift_type', 'id': 'standard:shift_type' },
    { 'iconName': 'standard:shift', 'id': 'standard:shift' },
    { 'iconName': 'standard:shipment', 'id': 'standard:shipment' },
    { 'iconName': 'standard:skill_entity', 'id': 'standard:skill_entity' },
    { 'iconName': 'standard:skill_requirement', 'id': 'standard:skill_requirement' },
    { 'iconName': 'standard:skill', 'id': 'standard:skill' },
    { 'iconName': 'standard:sms', 'id': 'standard:sms' },
    { 'iconName': 'standard:snippet', 'id': 'standard:snippet' },
    { 'iconName': 'standard:snippets', 'id': 'standard:snippets' },
    { 'iconName': 'standard:sobject_collection', 'id': 'standard:sobject_collection' },
    { 'iconName': 'standard:sobject', 'id': 'standard:sobject' },
    { 'iconName': 'standard:social', 'id': 'standard:social' },
    { 'iconName': 'standard:solution', 'id': 'standard:solution' },
    { 'iconName': 'standard:sort', 'id': 'standard:sort' },
    { 'iconName': 'standard:sossession', 'id': 'standard:sossession' },
    { 'iconName': 'standard:stage_collection', 'id': 'standard:stage_collection' },
    { 'iconName': 'standard:stage', 'id': 'standard:stage' },
    { 'iconName': 'standard:steps', 'id': 'standard:steps' },
    { 'iconName': 'standard:store_group', 'id': 'standard:store_group' },
    { 'iconName': 'standard:store', 'id': 'standard:store' },
    { 'iconName': 'standard:story', 'id': 'standard:story' },
    { 'iconName': 'standard:strategy', 'id': 'standard:strategy' },
    { 'iconName': 'standard:survey', 'id': 'standard:survey' },
    { 'iconName': 'standard:system_and_global_variable', 'id': 'standard:system_and_global_variable' },
    { 'iconName': 'standard:task', 'id': 'standard:task' },
    { 'iconName': 'standard:task2', 'id': 'standard:task2' },
    { 'iconName': 'standard:team_member', 'id': 'standard:team_member' },
    { 'iconName': 'standard:template', 'id': 'standard:template' },
    { 'iconName': 'standard:text_template', 'id': 'standard:text_template' },
    { 'iconName': 'standard:text', 'id': 'standard:text' },
    { 'iconName': 'standard:textarea', 'id': 'standard:textarea' },
    { 'iconName': 'standard:textbox', 'id': 'standard:textbox' },
    { 'iconName': 'standard:thanks_loading', 'id': 'standard:thanks_loading' },
    { 'iconName': 'standard:thanks', 'id': 'standard:thanks' },
    { 'iconName': 'standard:timesheet_entry', 'id': 'standard:timesheet_entry' },
    { 'iconName': 'standard:timesheet', 'id': 'standard:timesheet' },
    { 'iconName': 'standard:timeslot', 'id': 'standard:timeslot' },
    { 'iconName': 'standard:today', 'id': 'standard:today' },
    { 'iconName': 'standard:topic', 'id': 'standard:topic' },
    { 'iconName': 'standard:topic2', 'id': 'standard:topic2' },
    { 'iconName': 'standard:trailhead', 'id': 'standard:trailhead' },
    { 'iconName': 'standard:unmatched', 'id': 'standard:unmatched' },
    { 'iconName': 'standard:user_role', 'id': 'standard:user_role' },
    { 'iconName': 'standard:user', 'id': 'standard:user' },
    { 'iconName': 'standard:variable', 'id': 'standard:variable' },
    { 'iconName': 'standard:visit_templates', 'id': 'standard:visit_templates' },
    { 'iconName': 'standard:visits', 'id': 'standard:visits' },
    { 'iconName': 'standard:visualforce_page', 'id': 'standard:visualforce_page' },
    { 'iconName': 'standard:waits', 'id': 'standard:waits' },
    { 'iconName': 'standard:work_capacity_limit', 'id': 'standard:work_capacity_limit' },
    { 'iconName': 'standard:work_capacity_usage', 'id': 'standard:work_capacity_usage' },
    { 'iconName': 'standard:work_order_item', 'id': 'standard:work_order_item' },
    { 'iconName': 'standard:work_order', 'id': 'standard:work_order' },
    { 'iconName': 'standard:work_queue', 'id': 'standard:work_queue' },
    { 'iconName': 'standard:work_type_group', 'id': 'standard:work_type_group' },
    { 'iconName': 'standard:work_type', 'id': 'standard:work_type' }
]

const UTILITY_ICONS = [
    { 'iconName': 'utility:activity', 'id': 'utility:activity' },
    { 'iconName': 'utility:ad_set', 'id': 'utility:ad_set' },
    { 'iconName': 'utility:add', 'id': 'utility:add' },
    { 'iconName': 'utility:adduser', 'id': 'utility:adduser' },
    { 'iconName': 'utility:advanced_function', 'id': 'utility:advanced_function' },
    { 'iconName': 'utility:advertising', 'id': 'utility:advertising' },
    { 'iconName': 'utility:agent_session', 'id': 'utility:agent_session' },
    { 'iconName': 'utility:alert', 'id': 'utility:alert' },
    { 'iconName': 'utility:all', 'id': 'utility:all' },
    { 'iconName': 'utility:anchor', 'id': 'utility:anchor' },
    { 'iconName': 'utility:animal_and_nature', 'id': 'utility:animal_and_nature' },
    { 'iconName': 'utility:announcement', 'id': 'utility:announcement' },
    { 'iconName': 'utility:answer', 'id': 'utility:answer' },
    { 'iconName': 'utility:answered_twice', 'id': 'utility:answered_twice' },
    { 'iconName': 'utility:apex_plugin', 'id': 'utility:apex_plugin' },
    { 'iconName': 'utility:apex', 'id': 'utility:apex' },
    { 'iconName': 'utility:approval', 'id': 'utility:approval' },
    { 'iconName': 'utility:apps', 'id': 'utility:apps' },
    { 'iconName': 'utility:archive', 'id': 'utility:archive' },
    { 'iconName': 'utility:arrowdown', 'id': 'utility:arrowdown' },
    { 'iconName': 'utility:arrowup', 'id': 'utility:arrowup' },
    { 'iconName': 'utility:assignment', 'id': 'utility:assignment' },
    { 'iconName': 'utility:attach', 'id': 'utility:attach' },
    { 'iconName': 'utility:automate', 'id': 'utility:automate' },
    { 'iconName': 'utility:away', 'id': 'utility:away' },
    { 'iconName': 'utility:back', 'id': 'utility:back' },
    { 'iconName': 'utility:ban', 'id': 'utility:ban' },
    { 'iconName': 'utility:block_visitor', 'id': 'utility:block_visitor' },
    { 'iconName': 'utility:bold', 'id': 'utility:bold' },
    { 'iconName': 'utility:bookmark', 'id': 'utility:bookmark' },
    { 'iconName': 'utility:breadcrumbs', 'id': 'utility:breadcrumbs' },
    { 'iconName': 'utility:broadcast', 'id': 'utility:broadcast' },
    { 'iconName': 'utility:brush', 'id': 'utility:brush' },
    { 'iconName': 'utility:bucket', 'id': 'utility:bucket' },
    { 'iconName': 'utility:builder', 'id': 'utility:builder' },
    { 'iconName': 'utility:call', 'id': 'utility:call' },
    { 'iconName': 'utility:campaign', 'id': 'utility:campaign' },
    { 'iconName': 'utility:cancel_file_request', 'id': 'utility:cancel_file_request' },
    { 'iconName': 'utility:cancel_transfer', 'id': 'utility:cancel_transfer' },
    { 'iconName': 'utility:capslock', 'id': 'utility:capslock' },
    { 'iconName': 'utility:cart', 'id': 'utility:cart' },
    { 'iconName': 'utility:case', 'id': 'utility:case' },
    { 'iconName': 'utility:cases', 'id': 'utility:cases' },
    { 'iconName': 'utility:center_align_text', 'id': 'utility:center_align_text' },
    { 'iconName': 'utility:change_owner', 'id': 'utility:change_owner' },
    { 'iconName': 'utility:change_record_type', 'id': 'utility:change_record_type' },
    { 'iconName': 'utility:chart', 'id': 'utility:chart' },
    { 'iconName': 'utility:chat', 'id': 'utility:chat' },
    { 'iconName': 'utility:check', 'id': 'utility:check' },
    { 'iconName': 'utility:checkin', 'id': 'utility:checkin' },
    { 'iconName': 'utility:chevrondown', 'id': 'utility:chevrondown' },
    { 'iconName': 'utility:chevronleft', 'id': 'utility:chevronleft' },
    { 'iconName': 'utility:chevronright', 'id': 'utility:chevronright' },
    { 'iconName': 'utility:chevronup', 'id': 'utility:chevronup' },
    { 'iconName': 'utility:choice', 'id': 'utility:choice' },
    { 'iconName': 'utility:classic_interface', 'id': 'utility:classic_interface' },
    { 'iconName': 'utility:clear', 'id': 'utility:clear' },
    { 'iconName': 'utility:clock', 'id': 'utility:clock' },
    { 'iconName': 'utility:close', 'id': 'utility:close' },
    { 'iconName': 'utility:collapse_all', 'id': 'utility:collapse_all' },
    { 'iconName': 'utility:collection_variable', 'id': 'utility:collection_variable' },
    { 'iconName': 'utility:color_swatch', 'id': 'utility:color_swatch' },
    { 'iconName': 'utility:comments', 'id': 'utility:comments' },
    { 'iconName': 'utility:company', 'id': 'utility:company' },
    { 'iconName': 'utility:component_customization', 'id': 'utility:component_customization' },
    { 'iconName': 'utility:connected_apps', 'id': 'utility:connected_apps' },
    { 'iconName': 'utility:constant', 'id': 'utility:constant' },
    { 'iconName': 'utility:contact_request', 'id': 'utility:contact_request' },
    { 'iconName': 'utility:contract_alt', 'id': 'utility:contract_alt' },
    { 'iconName': 'utility:contract', 'id': 'utility:contract' },
    { 'iconName': 'utility:copy_to_clipboard', 'id': 'utility:copy_to_clipboard' },
    { 'iconName': 'utility:copy', 'id': 'utility:copy' },
    { 'iconName': 'utility:crossfilter', 'id': 'utility:crossfilter' },
    { 'iconName': 'utility:currency_input', 'id': 'utility:currency_input' },
    { 'iconName': 'utility:currency', 'id': 'utility:currency' },
    { 'iconName': 'utility:custom_apps', 'id': 'utility:custom_apps' },
    { 'iconName': 'utility:cut', 'id': 'utility:cut' },
    { 'iconName': 'utility:dash', 'id': 'utility:dash' },
    { 'iconName': 'utility:database', 'id': 'utility:database' },
    { 'iconName': 'utility:datadotcom', 'id': 'utility:datadotcom' },
    { 'iconName': 'utility:date_input', 'id': 'utility:date_input' },
    { 'iconName': 'utility:date_time', 'id': 'utility:date_time' },
    { 'iconName': 'utility:dayview', 'id': 'utility:dayview' },
    { 'iconName': 'utility:delete', 'id': 'utility:delete' },
    { 'iconName': 'utility:deprecate', 'id': 'utility:deprecate' },
    { 'iconName': 'utility:description', 'id': 'utility:description' },
    { 'iconName': 'utility:desktop_and_phone', 'id': 'utility:desktop_and_phone' },
    { 'iconName': 'utility:desktop_console', 'id': 'utility:desktop_console' },
    { 'iconName': 'utility:desktop', 'id': 'utility:desktop' },
    { 'iconName': 'utility:dialing', 'id': 'utility:dialing' },
    { 'iconName': 'utility:dislike', 'id': 'utility:dislike' },
    { 'iconName': 'utility:display_rich_text', 'id': 'utility:display_rich_text' },
    { 'iconName': 'utility:display_text', 'id': 'utility:display_text' },
    { 'iconName': 'utility:dock_panel', 'id': 'utility:dock_panel' },
    { 'iconName': 'utility:down', 'id': 'utility:down' },
    { 'iconName': 'utility:download', 'id': 'utility:download' },
    { 'iconName': 'utility:drag_and_drop', 'id': 'utility:drag_and_drop' },
    { 'iconName': 'utility:drag', 'id': 'utility:drag' },
    { 'iconName': 'utility:dynamic_record_choice', 'id': 'utility:dynamic_record_choice' },
    { 'iconName': 'utility:edit_form', 'id': 'utility:edit_form' },
    { 'iconName': 'utility:edit', 'id': 'utility:edit' },
    { 'iconName': 'utility:education', 'id': 'utility:education' },
    { 'iconName': 'utility:einstein', 'id': 'utility:einstein' },
    { 'iconName': 'utility:email_open', 'id': 'utility:email_open' },
    { 'iconName': 'utility:email', 'id': 'utility:email' },
    { 'iconName': 'utility:emoji', 'id': 'utility:emoji' },
    { 'iconName': 'utility:end_call', 'id': 'utility:end_call' },
    { 'iconName': 'utility:end_chat', 'id': 'utility:end_chat' },
    { 'iconName': 'utility:end_messaging_session', 'id': 'utility:end_messaging_session' },
    { 'iconName': 'utility:erect_window', 'id': 'utility:erect_window' },
    { 'iconName': 'utility:error', 'id': 'utility:error' },
    { 'iconName': 'utility:event', 'id': 'utility:event' },
    { 'iconName': 'utility:events', 'id': 'utility:events' },
    { 'iconName': 'utility:expand_all', 'id': 'utility:expand_all' },
    { 'iconName': 'utility:expand_alt', 'id': 'utility:expand_alt' },
    { 'iconName': 'utility:expand', 'id': 'utility:expand' },
    { 'iconName': 'utility:fallback', 'id': 'utility:fallback' },
    { 'iconName': 'utility:favorite', 'id': 'utility:favorite' },
    { 'iconName': 'utility:feed', 'id': 'utility:feed' },
    { 'iconName': 'utility:file', 'id': 'utility:file' },
    { 'iconName': 'utility:filter', 'id': 'utility:filter' },
    { 'iconName': 'utility:filterList', 'id': 'utility:filterList' },
    { 'iconName': 'utility:flow', 'id': 'utility:flow' },
    { 'iconName': 'utility:food_and_drink', 'id': 'utility:food_and_drink' },
    { 'iconName': 'utility:formula', 'id': 'utility:formula' },
    { 'iconName': 'utility:forward_up', 'id': 'utility:forward_up' },
    { 'iconName': 'utility:forward', 'id': 'utility:forward' },
    { 'iconName': 'utility:frozen', 'id': 'utility:frozen' },
    { 'iconName': 'utility:fulfillment_order', 'id': 'utility:fulfillment_order' },
    { 'iconName': 'utility:full_width_view', 'id': 'utility:full_width_view' },
    { 'iconName': 'utility:global_constant', 'id': 'utility:global_constant' },
    { 'iconName': 'utility:graph', 'id': 'utility:graph' },
    { 'iconName': 'utility:groups', 'id': 'utility:groups' },
    { 'iconName': 'utility:help_center', 'id': 'utility:help_center' },
    { 'iconName': 'utility:help', 'id': 'utility:help' },
    { 'iconName': 'utility:hide_mobile', 'id': 'utility:hide_mobile' },
    { 'iconName': 'utility:hide', 'id': 'utility:hide' },
    { 'iconName': 'utility:hierarchy', 'id': 'utility:hierarchy' },
    { 'iconName': 'utility:high_velocity_sales', 'id': 'utility:high_velocity_sales' },
    { 'iconName': 'utility:home', 'id': 'utility:home' },
    { 'iconName': 'utility:identity', 'id': 'utility:identity' },
    { 'iconName': 'utility:image', 'id': 'utility:image' },
    { 'iconName': 'utility:in_app_assistant', 'id': 'utility:in_app_assistant' },
    { 'iconName': 'utility:inbox', 'id': 'utility:inbox' },
    { 'iconName': 'utility:incoming_call', 'id': 'utility:incoming_call' },
    { 'iconName': 'utility:info_alt', 'id': 'utility:info_alt' },
    { 'iconName': 'utility:info', 'id': 'utility:info' },
    { 'iconName': 'utility:insert_tag_field', 'id': 'utility:insert_tag_field' },
    { 'iconName': 'utility:insert_template', 'id': 'utility:insert_template' },
    { 'iconName': 'utility:inspector_panel', 'id': 'utility:inspector_panel' },
    { 'iconName': 'utility:internal_share', 'id': 'utility:internal_share' },
    { 'iconName': 'utility:italic', 'id': 'utility:italic' },
    { 'iconName': 'utility:jump_to_bottom', 'id': 'utility:jump_to_bottom' },
    { 'iconName': 'utility:jump_to_top', 'id': 'utility:jump_to_top' },
    { 'iconName': 'utility:justify_text', 'id': 'utility:justify_text' },
    { 'iconName': 'utility:kanban', 'id': 'utility:kanban' },
    { 'iconName': 'utility:keyboard_dismiss', 'id': 'utility:keyboard_dismiss' },
    { 'iconName': 'utility:knowledge_base', 'id': 'utility:knowledge_base' },
    { 'iconName': 'utility:layers', 'id': 'utility:layers' },
    { 'iconName': 'utility:layout', 'id': 'utility:layout' },
    { 'iconName': 'utility:leave_conference', 'id': 'utility:leave_conference' },
    { 'iconName': 'utility:left_align_text', 'id': 'utility:left_align_text' },
    { 'iconName': 'utility:left', 'id': 'utility:left' },
    { 'iconName': 'utility:level_down', 'id': 'utility:level_down' },
    { 'iconName': 'utility:level_up', 'id': 'utility:level_up' },
    { 'iconName': 'utility:light_bulb', 'id': 'utility:light_bulb' },
    { 'iconName': 'utility:lightning_inspector', 'id': 'utility:lightning_inspector' },
    { 'iconName': 'utility:like', 'id': 'utility:like' },
    { 'iconName': 'utility:link', 'id': 'utility:link' },
    { 'iconName': 'utility:linked', 'id': 'utility:linked' },
    { 'iconName': 'utility:list', 'id': 'utility:list' },
    { 'iconName': 'utility:listen', 'id': 'utility:listen' },
    { 'iconName': 'utility:live_message', 'id': 'utility:live_message' },
    { 'iconName': 'utility:location', 'id': 'utility:location' },
    { 'iconName': 'utility:lock', 'id': 'utility:lock' },
    { 'iconName': 'utility:locker_service_api_viewer', 'id': 'utility:locker_service_api_viewer' },
    { 'iconName': 'utility:locker_service_console', 'id': 'utility:locker_service_console' },
    { 'iconName': 'utility:log_a_call', 'id': 'utility:log_a_call' },
    { 'iconName': 'utility:logout', 'id': 'utility:logout' },
    { 'iconName': 'utility:loop', 'id': 'utility:loop' },
    { 'iconName': 'utility:lower_flag', 'id': 'utility:lower_flag' },
    { 'iconName': 'utility:macros', 'id': 'utility:macros' },
    { 'iconName': 'utility:magicwand', 'id': 'utility:magicwand' },
    { 'iconName': 'utility:mark_all_as_read', 'id': 'utility:mark_all_as_read' },
    { 'iconName': 'utility:matrix', 'id': 'utility:matrix' },
    { 'iconName': 'utility:merge_field', 'id': 'utility:merge_field' },
    { 'iconName': 'utility:merge', 'id': 'utility:merge' },
    { 'iconName': 'utility:metrics', 'id': 'utility:metrics' },
    { 'iconName': 'utility:minimize_window', 'id': 'utility:minimize_window' },
    { 'iconName': 'utility:missed_call', 'id': 'utility:missed_call' },
    { 'iconName': 'utility:money', 'id': 'utility:money' },
    { 'iconName': 'utility:moneybag', 'id': 'utility:moneybag' },
    { 'iconName': 'utility:monthlyview', 'id': 'utility:monthlyview' },
    { 'iconName': 'utility:move', 'id': 'utility:move' },
    { 'iconName': 'utility:multi_picklist', 'id': 'utility:multi_picklist' },
    { 'iconName': 'utility:multi_select_checkbox', 'id': 'utility:multi_select_checkbox' },
    { 'iconName': 'utility:muted', 'id': 'utility:muted' },
    { 'iconName': 'utility:new_direct_message', 'id': 'utility:new_direct_message' },
    { 'iconName': 'utility:new_window', 'id': 'utility:new_window' },
    { 'iconName': 'utility:new', 'id': 'utility:new' },
    { 'iconName': 'utility:news', 'id': 'utility:news' },
    { 'iconName': 'utility:note', 'id': 'utility:note' },
    { 'iconName': 'utility:notebook', 'id': 'utility:notebook' },
    { 'iconName': 'utility:notification', 'id': 'utility:notification' },
    { 'iconName': 'utility:number_input', 'id': 'utility:number_input' },
    { 'iconName': 'utility:office365', 'id': 'utility:office365' },
    { 'iconName': 'utility:offline_cached', 'id': 'utility:offline_cached' },
    { 'iconName': 'utility:offline', 'id': 'utility:offline' },
    { 'iconName': 'utility:omni_channel', 'id': 'utility:omni_channel' },
    { 'iconName': 'utility:open_folder', 'id': 'utility:open_folder' },
    { 'iconName': 'utility:open', 'id': 'utility:open' },
    { 'iconName': 'utility:opened_folder', 'id': 'utility:opened_folder' },
    { 'iconName': 'utility:outbound_call', 'id': 'utility:outbound_call' },
    { 'iconName': 'utility:outcome', 'id': 'utility:outcome' },
    { 'iconName': 'utility:overflow', 'id': 'utility:overflow' },
    { 'iconName': 'utility:package_org_beta', 'id': 'utility:package_org_beta' },
    { 'iconName': 'utility:package_org', 'id': 'utility:package_org' },
    { 'iconName': 'utility:package', 'id': 'utility:package' },
    { 'iconName': 'utility:page', 'id': 'utility:page' },
    { 'iconName': 'utility:palette', 'id': 'utility:palette' },
    { 'iconName': 'utility:password', 'id': 'utility:password' },
    { 'iconName': 'utility:paste', 'id': 'utility:paste' },
    { 'iconName': 'utility:pause', 'id': 'utility:pause' },
    { 'iconName': 'utility:people', 'id': 'utility:people' },
    { 'iconName': 'utility:phone_landscape', 'id': 'utility:phone_landscape' },
    { 'iconName': 'utility:phone_portrait', 'id': 'utility:phone_portrait' },
    { 'iconName': 'utility:photo', 'id': 'utility:photo' },
    { 'iconName': 'utility:picklist_choice', 'id': 'utility:picklist_choice' },
    { 'iconName': 'utility:picklist_type', 'id': 'utility:picklist_type' },
    { 'iconName': 'utility:picklist', 'id': 'utility:picklist' },
    { 'iconName': 'utility:pin', 'id': 'utility:pin' },
    { 'iconName': 'utility:pinned', 'id': 'utility:pinned' },
    { 'iconName': 'utility:play', 'id': 'utility:play' },
    { 'iconName': 'utility:podcast_webinar', 'id': 'utility:podcast_webinar' },
    { 'iconName': 'utility:pop_in', 'id': 'utility:pop_in' },
    { 'iconName': 'utility:power', 'id': 'utility:power' },
    { 'iconName': 'utility:preview', 'id': 'utility:preview' },
    { 'iconName': 'utility:print', 'id': 'utility:print' },
    { 'iconName': 'utility:priority', 'id': 'utility:priority' },
    { 'iconName': 'utility:privately_shared', 'id': 'utility:privately_shared' },
    { 'iconName': 'utility:process', 'id': 'utility:process' },
    { 'iconName': 'utility:prompt_edit', 'id': 'utility:prompt_edit' },
    { 'iconName': 'utility:prompt', 'id': 'utility:prompt' },
    { 'iconName': 'utility:push', 'id': 'utility:push' },
    { 'iconName': 'utility:puzzle', 'id': 'utility:puzzle' },
    { 'iconName': 'utility:question_mark', 'id': 'utility:question_mark' },
    { 'iconName': 'utility:question', 'id': 'utility:question' },
    { 'iconName': 'utility:questions_and_answers', 'id': 'utility:questions_and_answers' },
    { 'iconName': 'utility:quick_text', 'id': 'utility:quick_text' },
    { 'iconName': 'utility:quip', 'id': 'utility:quip' },
    { 'iconName': 'utility:quotation_marks', 'id': 'utility:quotation_marks' },
    { 'iconName': 'utility:quote', 'id': 'utility:quote' },
    { 'iconName': 'utility:radio_button', 'id': 'utility:radio_button' },
    { 'iconName': 'utility:rating', 'id': 'utility:rating' },
    { 'iconName': 'utility:reassign', 'id': 'utility:reassign' },
    { 'iconName': 'utility:record_create', 'id': 'utility:record_create' },
    { 'iconName': 'utility:record_delete', 'id': 'utility:record_delete' },
    { 'iconName': 'utility:record_lookup', 'id': 'utility:record_lookup' },
    { 'iconName': 'utility:record_update', 'id': 'utility:record_update' },
    { 'iconName': 'utility:record', 'id': 'utility:record' },
    { 'iconName': 'utility:recurring_exception', 'id': 'utility:recurring_exception' },
    { 'iconName': 'utility:recycle_bin_empty', 'id': 'utility:recycle_bin_empty' },
    { 'iconName': 'utility:recycle_bin_full', 'id': 'utility:recycle_bin_full' },
    { 'iconName': 'utility:redo', 'id': 'utility:redo' },
    { 'iconName': 'utility:refresh', 'id': 'utility:refresh' },
    { 'iconName': 'utility:relate', 'id': 'utility:relate' },
    { 'iconName': 'utility:reminder', 'id': 'utility:reminder' },
    { 'iconName': 'utility:remove_formatting', 'id': 'utility:remove_formatting' },
    { 'iconName': 'utility:remove_link', 'id': 'utility:remove_link' },
    { 'iconName': 'utility:replace', 'id': 'utility:replace' },
    { 'iconName': 'utility:reply_all', 'id': 'utility:reply_all' },
    { 'iconName': 'utility:reply', 'id': 'utility:reply' },
    { 'iconName': 'utility:report_issue', 'id': 'utility:report_issue' },
    { 'iconName': 'utility:reset_password', 'id': 'utility:reset_password' },
    { 'iconName': 'utility:resource_absence', 'id': 'utility:resource_absence' },
    { 'iconName': 'utility:resource_capacity', 'id': 'utility:resource_capacity' },
    { 'iconName': 'utility:resource_territory', 'id': 'utility:resource_territory' },
    { 'iconName': 'utility:retweet', 'id': 'utility:retweet' },
    { 'iconName': 'utility:ribbon', 'id': 'utility:ribbon' },
    { 'iconName': 'utility:richtextbulletedlist', 'id': 'utility:richtextbulletedlist' },
    { 'iconName': 'utility:richtextindent', 'id': 'utility:richtextindent' },
    { 'iconName': 'utility:richtextnumberedlist', 'id': 'utility:richtextnumberedlist' },
    { 'iconName': 'utility:richtextoutdent', 'id': 'utility:richtextoutdent' },
    { 'iconName': 'utility:right_align_text', 'id': 'utility:right_align_text' },
    { 'iconName': 'utility:right', 'id': 'utility:right' },
    { 'iconName': 'utility:rotate', 'id': 'utility:rotate' },
    { 'iconName': 'utility:routing_offline', 'id': 'utility:routing_offline' },
    { 'iconName': 'utility:rows', 'id': 'utility:rows' },
    { 'iconName': 'utility:rules', 'id': 'utility:rules' },
    { 'iconName': 'utility:salesforce1', 'id': 'utility:salesforce1' },
    { 'iconName': 'utility:save', 'id': 'utility:save' },
    { 'iconName': 'utility:screen', 'id': 'utility:screen' },
    { 'iconName': 'utility:search', 'id': 'utility:search' },
    { 'iconName': 'utility:send', 'id': 'utility:send' },
    { 'iconName': 'utility:sentiment_negative', 'id': 'utility:sentiment_negative' },
    { 'iconName': 'utility:sentiment_neutral', 'id': 'utility:sentiment_neutral' },
    { 'iconName': 'utility:settings', 'id': 'utility:settings' },
    { 'iconName': 'utility:setup_assistant_guide', 'id': 'utility:setup_assistant_guide' },
    { 'iconName': 'utility:setup_modal', 'id': 'utility:setup_modal' },
    { 'iconName': 'utility:setup', 'id': 'utility:setup' },
    { 'iconName': 'utility:share_file', 'id': 'utility:share_file' },
    { 'iconName': 'utility:share_mobile', 'id': 'utility:share_mobile' },
    { 'iconName': 'utility:share_post', 'id': 'utility:share_post' },
    { 'iconName': 'utility:share', 'id': 'utility:share' },
    { 'iconName': 'utility:shield', 'id': 'utility:shield' },
    { 'iconName': 'utility:shift_ui', 'id': 'utility:shift_ui' },
    { 'iconName': 'utility:shopping_bag', 'id': 'utility:shopping_bag' },
    { 'iconName': 'utility:shortcuts', 'id': 'utility:shortcuts' },
    { 'iconName': 'utility:side_list', 'id': 'utility:side_list' },
    { 'iconName': 'utility:signpost', 'id': 'utility:signpost' },
    { 'iconName': 'utility:skip', 'id': 'utility:skip' },
    { 'iconName': 'utility:smiley_and_people', 'id': 'utility:smiley_and_people' },
    { 'iconName': 'utility:sms', 'id': 'utility:sms' },
    { 'iconName': 'utility:snippet', 'id': 'utility:snippet' },
    { 'iconName': 'utility:sobject_collection', 'id': 'utility:sobject_collection' },
    { 'iconName': 'utility:sobject', 'id': 'utility:sobject' },
    { 'iconName': 'utility:socialshare', 'id': 'utility:socialshare' },
    { 'iconName': 'utility:sort', 'id': 'utility:sort' },
    { 'iconName': 'utility:spinner', 'id': 'utility:spinner' },
    { 'iconName': 'utility:stage_collection', 'id': 'utility:stage_collection' },
    { 'iconName': 'utility:stage', 'id': 'utility:stage' },
    { 'iconName': 'utility:standard_objects', 'id': 'utility:standard_objects' },
    { 'iconName': 'utility:steps', 'id': 'utility:steps' },
    { 'iconName': 'utility:stop', 'id': 'utility:stop' },
    { 'iconName': 'utility:store', 'id': 'utility:store' },
    { 'iconName': 'utility:strategy', 'id': 'utility:strategy' },
    { 'iconName': 'utility:strikethrough', 'id': 'utility:strikethrough' },
    { 'iconName': 'utility:success', 'id': 'utility:success' },
    { 'iconName': 'utility:summary', 'id': 'utility:summary' },
    { 'iconName': 'utility:summarydetail', 'id': 'utility:summarydetail' },
    { 'iconName': 'utility:survey', 'id': 'utility:survey' },
    { 'iconName': 'utility:switch', 'id': 'utility:switch' },
    { 'iconName': 'utility:symbols', 'id': 'utility:symbols' },
    { 'iconName': 'utility:sync', 'id': 'utility:sync' },
    { 'iconName': 'utility:system_and_global_variable', 'id': 'utility:system_and_global_variable' },
    { 'iconName': 'utility:table', 'id': 'utility:table' },
    { 'iconName': 'utility:tablet_landscape', 'id': 'utility:tablet_landscape' },
    { 'iconName': 'utility:tablet_portrait', 'id': 'utility:tablet_portrait' },
    { 'iconName': 'utility:tabset', 'id': 'utility:tabset' },
    { 'iconName': 'utility:task', 'id': 'utility:task' },
    { 'iconName': 'utility:text_background_color', 'id': 'utility:text_background_color' },
    { 'iconName': 'utility:text_color', 'id': 'utility:text_color' },
    { 'iconName': 'utility:text_template', 'id': 'utility:text_template' },
    { 'iconName': 'utility:text', 'id': 'utility:text' },
    { 'iconName': 'utility:textarea', 'id': 'utility:textarea' },
    { 'iconName': 'utility:textbox', 'id': 'utility:textbox' },
    { 'iconName': 'utility:threedots_vertical', 'id': 'utility:threedots_vertical' },
    { 'iconName': 'utility:threedots', 'id': 'utility:threedots' },
    { 'iconName': 'utility:thunder', 'id': 'utility:thunder' },
    { 'iconName': 'utility:tile_card_list', 'id': 'utility:tile_card_list' },
    { 'iconName': 'utility:toggle_panel_bottom', 'id': 'utility:toggle_panel_bottom' },
    { 'iconName': 'utility:toggle_panel_left', 'id': 'utility:toggle_panel_left' },
    { 'iconName': 'utility:toggle_panel_right', 'id': 'utility:toggle_panel_right' },
    { 'iconName': 'utility:toggle_panel_top', 'id': 'utility:toggle_panel_top' },
    { 'iconName': 'utility:topic', 'id': 'utility:topic' },
    { 'iconName': 'utility:topic2', 'id': 'utility:topic2' },
    { 'iconName': 'utility:touch_action', 'id': 'utility:touch_action' },
    { 'iconName': 'utility:tracker', 'id': 'utility:tracker' },
    { 'iconName': 'utility:trail', 'id': 'utility:trail' },
    { 'iconName': 'utility:trailhead', 'id': 'utility:trailhead' },
    { 'iconName': 'utility:travel_and_places', 'id': 'utility:travel_and_places' },
    { 'iconName': 'utility:trending', 'id': 'utility:trending' },
    { 'iconName': 'utility:turn_off_notifications', 'id': 'utility:turn_off_notifications' },
    { 'iconName': 'utility:type_tool', 'id': 'utility:type_tool' },
    { 'iconName': 'utility:type', 'id': 'utility:type' },
    { 'iconName': 'utility:undelete', 'id': 'utility:undelete' },
    { 'iconName': 'utility:undeprecate', 'id': 'utility:undeprecate' },
    { 'iconName': 'utility:underline', 'id': 'utility:underline' },
    { 'iconName': 'utility:undo', 'id': 'utility:undo' },
    { 'iconName': 'utility:unlinked', 'id': 'utility:unlinked' },
    { 'iconName': 'utility:unlock', 'id': 'utility:unlock' },
    { 'iconName': 'utility:unmuted', 'id': 'utility:unmuted' },
    { 'iconName': 'utility:up', 'id': 'utility:up' },
    { 'iconName': 'utility:upload', 'id': 'utility:upload' },
    { 'iconName': 'utility:user_role', 'id': 'utility:user_role' },
    { 'iconName': 'utility:user', 'id': 'utility:user' },
    { 'iconName': 'utility:variable', 'id': 'utility:variable' },
    { 'iconName': 'utility:video', 'id': 'utility:video' },
    { 'iconName': 'utility:voicemail_drop', 'id': 'utility:voicemail_drop' },
    { 'iconName': 'utility:volume_high', 'id': 'utility:volume_high' },
    { 'iconName': 'utility:volume_low', 'id': 'utility:volume_low' },
    { 'iconName': 'utility:volume_off', 'id': 'utility:volume_off' },
    { 'iconName': 'utility:waits', 'id': 'utility:waits' },
    { 'iconName': 'utility:warning', 'id': 'utility:warning' },
    { 'iconName': 'utility:weeklyview', 'id': 'utility:weeklyview' },
    { 'iconName': 'utility:wifi', 'id': 'utility:wifi' },
    { 'iconName': 'utility:work_order_type', 'id': 'utility:work_order_type' },
    { 'iconName': 'utility:world', 'id': 'utility:world' },
    { 'iconName': 'utility:yubi_key', 'id': 'utility:yubi_key' },
    { 'iconName': 'utility:zoomin', 'id': 'utility:zoomin' },
    { 'iconName': 'utility:zoomout', 'id': 'utility:zoomout' }
]

const MODES = {
    ACCORDION: 'accordion',
    TAB: 'tab',
    COMBOBOX: 'combobox'
}
const CLASSES = {
    OPEN: 'slds-is-open'
}

const SEARCHBOX_ICONS = {
    CLEAR: 'utility:clear',
    SEARCH: 'utility:search'
}

const DEFAULT_MAX_RESULTS = 50;

const columns = [
    { label: 'Icon', fieldName: 'id', cellAttributes:{ iconName: { fieldName: 'iconName' } }}
];
export default class ObjectIconSelector extends LightningElement {

    @track actionIcons = ACTION_ICONS;
    @track customIcons = CUSTOM_ICONS;
    @track utilityIcons = UTILITY_ICONS;
    @track standardIcons = STANDARD_ICONS;

    @api excludeStandardIcons;
    @api excludeCustomIcons;
    @api excludeUtilityIcons;    
    @api excludeActionIcons;

    @api mode;
    @api label = 'Pick an Icon';

    @api
    get iconName() {
        return this._iconName || null;
    }
    set iconName(iconName) {
        this._iconName = iconName;
        if (!this.rendered) {
            return;
        }
        if (this.comboboxMode) {
            if (iconName) {            
                this.addClass('.comboboxInput', 'slds-combobox__input-value');
                this.switchClass('.slds-combobox__form-element', 'slds-input-has-icon_right', 'slds-input-has-icon_left-right');
                this.addClass('.slds-combobox_container', 'slds-has-selection');
                this.template.querySelector('.comboboxInput').setAttribute('readonly', '');
                this.template.querySelector('.comboboxInput').value = iconName;
                this.blurSearchbox();
            } else {
                this.removeClass('.comboboxInput', 'slds-combobox__input-value');
                this.switchClass('.slds-combobox__form-element', 'slds-input-has-icon_left-right', 'slds-input-has-icon_right');            
                this.removeClass('.slds-combobox_container', 'slds-has-selection');
                this.template.querySelector('.comboboxInput').removeAttribute('readonly');
                this.template.querySelector('.comboboxInput').value = null;
            }
        }
        const iconSelectedEvent = new CustomEvent('iconselection', { detail: iconName });
        this.dispatchEvent(iconSelectedEvent);    
    }
    _iconName;
    @track icons = [];

    @track columns = columns;

    activeSections = [];            // 'S', 'U', 'C', 'A'
    maxResults = DEFAULT_MAX_RESULTS
    currentMaxResults = this.maxResults;
    searchText;
    noMatchesFoundString = 'No matches found';
    blockBlur;
    rendered;
    

    @api isAccordionLoading;        // Reserved for future improvements

    @api 
    get tabStyle() {
        let style;
        if (this.firstTabHeight) {
            style = `height: ${this.firstTabHeight}px`;
        }
        return style;
    }

    @api
    get tableStyle() {
        return TABLE_STYLE;
    }    

    @api firstTabHeight;

    get tabMode() { return this.mode === MODES.TAB; }
    get accordionMode() { return this.mode === MODES.ACCORDION; }
    get comboboxMode() { return this.mode === MODES.COMBOBOX; }
    get displayedIcons() {
        return this.filteredIcons.slice(0, this.currentMaxResults);
    }

    get filteredIcons() {
        if (!this.searchText) {
            return this.icons;
        }      
        let icons = [];
        for (let icon of this.icons) {
            if (icon.iconName.toLowerCase().includes(this.searchText)) {
                icons.push(icon);
            }
        }
        return icons;
    }

    get resultsExceedMax() {
        return this.filteredIcons.length > this.currentMaxResults;
    }

    get loadMoreString() {
        return 'Load more ('+ this.currentMaxResults +' of '+ this.filteredIcons.length +' '+ (this.searchText ? 'matches' : 'options') +' displayed)';
    }

    get searchboxIcon() {
        return (this.searchText || this.iconName) ? SEARCHBOX_ICONS.CLEAR : SEARCHBOX_ICONS.SEARCH;
    }

    connectedCallback() {
        if (!this.excludeStandardIcons) this.icons.push(...this.standardIcons);
        if (!this.excludeCustomIcons) this.icons.push(...this.customIcons);
        if (!this.excludeUtilityIcons) this.icons.push(...this.utilityIcons);
        // Action icons display weirdly in the combobox so I'm leaving them out for now
        //if (!this.excludeActionIcons) this.icons.push(...this.actionIcons);
    }

    renderedCallback() {
        if (this.rendered) return;
        this.rendered = true;

        if (this.iconName)
            this.iconName = this.iconName;

    }

    iconSelected(event){
        const selRow = event.detail.selectedRows[0];
        this.iconName=selRow.iconName;
        // Moving the dispatch to iconName setter
        // const iconSelectedEvent = new CustomEvent('iconselection', { detail: this.iconName });
        // this.dispatchEvent(iconSelectedEvent);
    }


    doSearch(searchText) {
        this.searchText = searchText ? searchText.toLowerCase() : null;
        this.showList();
    }

    showList() {
        this.addClass('.slds-dropdown-trigger', CLASSES.OPEN);
        this.focusSearchbox();
    }

    hideList() {
        this.removeClass('.slds-dropdown-trigger', CLASSES.OPEN);
    }

    loadMore() {
        this.currentMaxResults += this.maxResults;
    }

    focusSearchbox() {
        this.template.querySelector('.comboboxInput').focus();
    }

    blurSearchbox() {
        this.template.querySelector('.comboboxInput').blur();
    }

    clearSearchbox() {
        this.iconName = null;
        this.blockBlur = true;
        this.doSearch();
    }


    /* EVENT HANDLERS */
    handleIconSelect(event) {
        let icon = event.currentTarget.dataset.icon;
        this.iconName = icon;        
    }

    handleSearchFocus(event) {
        if (!this.iconName)
            this.doSearch(event.currentTarget.value);
    }

    handleSearchChange(event) {        
        this.doSearch(event.currentTarget.value);
    }    

    handleSearchBlur() {
        if (this.blockBlur) {            
            this.focusSearchbox();
            this.blockBlur = false;
        } else {
            this.currentMaxResults = this.maxResults;
            this.hideList();
        }
    }

    handleDropdownClick() {
        this.blockBlur = true;
    }

    handleSearchboxIconClick(event) {
        if (event.currentTarget.iconName == SEARCHBOX_ICONS.CLEAR) {
            this.clearSearchbox();
        } else {
            this.doSearch();
        }
    }

    /* UTITLITY FUNCTIONS */
    addClass(selector, className) {
        let el = this.template.querySelector(selector);
        if (el)
            el.classList.add(className);
        return !!el;
    }

    removeClass(selector, className) {
        let el = this.template.querySelector(selector);
        if (el)
            el.classList.remove(className);
        return !!el;
    }

    switchClass(selector, removeClass, addClass) {
        this.removeClass(selector, removeClass);
        this.addClass(selector, addClass);
    }    
}